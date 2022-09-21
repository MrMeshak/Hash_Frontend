import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilter, ILibPost, ILibraryState, ISort } from "./libraryModel";
import {
  axiosGql,
  getFilteredLibraryQuery,
  getLibraryQuery,
  IGetLibrary,
  IKnownError,
  IToggleUpVote,
  IToggleUpVoteRes,
  toggleUpVoteQuery,
} from "../../services/gqlApi";
import { HYDRATE } from "next-redux-wrapper";
import { Cookies } from "next/dist/server/web/spec-extension/cookies";
import { RootState } from "../store";

const initialState: ILibraryState = {
  library: {
    posts: [],
    filteredPosts: [],
    filter: {
      title: "All",
      value: ""
    },
    sort: {
      title: "Newest",
      value: "dateDesc"
    },
  },
  loading: false,
  error: "",
};

//Getting Library for SSR page generation 
export const getLibrary = createAsyncThunk<ILibPost[], IGetLibrary, {}>(
  "library/getLibrary",
  async (payload: IGetLibrary) => {
    return axiosGql
      .post(
        "/graphql",
        { query: getLibraryQuery},
        { headers: { Cookie: `authToken=${payload.authToken}`} }
      )
      .then((res) => {
        return res.data.data.posts;
      });
  }
);

//Getting Filtered Library on Client
export const getFilteredLibrary = createAsyncThunk<ILibPost[],undefined,{state: RootState}>(
  "library/getFilteredLibrary",
  async (_,thunkAPI) => {
    const state = thunkAPI.getState()
    const filter = state.library.library.filter.value
    const sort = state.library.library.sort.value
    return axiosGql
      .post(
        "/graphql",
        {
          query: getFilteredLibraryQuery,
          variables: {filter: filter, sort: sort}
        },
      )
      .then((res) => {
        return res.data.data.filteredPosts
      })
  }
)



const librarySlice = createSlice({
  name: "library",
  initialState: initialState,
  reducers: {
    setFilter(state, action: PayloadAction<IFilter>){
      state.library.filter = action.payload
    },
    setSort(state,action: PayloadAction<ISort>){
      state.library.sort = action.payload
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.library,
      };
    },
    ["library/getLibrary/pending"]: (state) => {
      state.loading = true;
    },
    ["library/getLibrary/fulfilled"]: (state, action) => {
      state.loading = false;
      state.library.posts = action.payload;
    },
    ["library/getLibrary/rejected"]: (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    },
    ["library/getFilteredLibrary/pending"]: (state) => {
      state.loading = true;
    },
    ["library/getFilteredLibrary/fulfilled"]: (state, action) => {
      state.loading = false;
      state.library.posts = action.payload;
    },
    ["library/getFilteredLibrary/rejected"]: (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    },
  },
});

export default librarySlice.reducer;
export const libraryActions = librarySlice.actions;
