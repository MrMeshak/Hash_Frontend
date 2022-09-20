import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ILibPost, ILibraryState } from "./libraryModel";
import {
  axiosGql,
  getLibraryQuery,
  IGetLibrary,
  IKnownError,
  IToggleUpVote,
  IToggleUpVoteRes,
  toggleUpVoteQuery,
} from "../../services/gqlApi";
import { HYDRATE } from "next-redux-wrapper";
import { Cookies } from "next/dist/server/web/spec-extension/cookies";

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

export const getLibrary = createAsyncThunk<ILibPost[], IGetLibrary, {}>(
  "library/getLibrary",
  async (payload: IGetLibrary) => {
    return axiosGql
      .post(
        "/graphql",
        { query: getLibraryQuery },
        { headers: { Cookie: `authToken=${payload.authToken}` } }
      )
      .then((res) => {
        return res.data.data.posts;
      });
  }
);

export const toggleUpVote = createAsyncThunk<IToggleUpVoteRes, IToggleUpVote,{}>(
  "library/toggleUpVote",
  async (payload: IToggleUpVote) => {
    return axiosGql
      .post("/graphql",
        { query: toggleUpVoteQuery,
        variables: {postId: payload.postId}})
      .then(res => res.data.data)
  }
)



const librarySlice = createSlice({
  name: "library",
  initialState: initialState,
  reducers: {},
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
  },
});

export default librarySlice.reducer;
export const libraryActions = librarySlice.actions;
