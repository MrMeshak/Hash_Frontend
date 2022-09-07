import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import store, { RootState } from "../store";
import { ILibPost, ILibraryState } from "./libraryModel";
import {
  axiosGql,
  getLibraryQuery,
  IGetLibrary,
  IKnownError,
} from "../../services/gqlApi";
import { get } from "https";

const initialState: ILibraryState = {
  library: {
    posts: [],
    filteredPosts: [],
    filter: "",
    sort: "",
  },
  loading: false,
  error: "",
};

export const getLibrary = createAsyncThunk<
  ILibPost[],
  IGetLibrary,
  { rejectValue: IKnownError; state: RootState }
>("library/getLibrary", async (payload, { getState, rejectWithValue }) => {
  return axiosGql
    .post("/graphql", { query: getLibraryQuery })
    .then((res) => {
      return res.data.data.getLibrary;
    })
    .catch((error) => {
      console.log("Error Object", error);
      if (!error.response.data) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    });
});

const librarySlice = createSlice({
  name: "library",
  initialState: initialState,
  reducers: {
    rehydrate(state, action) {
      state.library = action.payload.library;
      state.loading = action.payload.loading;
      state.error = action.payload.error;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getLibrary.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getLibrary.fulfilled, (state, action) => {
        state.loading = false;
        state.library.posts = action.payload;
      })
      .addCase(getLibrary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default librarySlice.reducer;
export const libraryActions = librarySlice.actions;
