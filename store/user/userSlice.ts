import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { create } from "domain";
import { HYDRATE } from "next-redux-wrapper";
import {
  axiosAuth,
  ILogin,
  ILoginRes,
  ISignup,
  ISignupRes,
} from "../../services/authApi";
import {
  axiosGql,
  getCurrentUserQuery,
  ICurrentUser,
  IKnownError,
} from "../../services/gqlApi";
import { IUser, IUserState } from "./userModel";

const initialState: IUserState = {
  user: {
    id: "",
    email: "",
    firstname: "",
    lastname: "",
    profileImg: "",

    createdAt: null,
    updatedAt: null,
  },
  loggedIn: false,
  loading: false,
  error: "",
};

export const login = createAsyncThunk<
  IUser,
  ILogin,
  { rejectValue: IKnownError }
>("user/login", (payload: ILogin, { rejectWithValue }) => {
  return axiosAuth
    .post("/login", payload)
    .then((res) => res.data)
    .catch((error) => {
      console.log("Error Object", error);
      if (!error.response.data) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    });
});

export const signup = createAsyncThunk<
  IUser,
  ISignup,
  { rejectValue: IKnownError }
>("user/signup", (payload: ISignup, { rejectWithValue }) => {
  return axiosAuth
    .post("/signup", payload)
    .then((res) => res.data)
    .catch((error) => {
      console.log("Error Object", error);
      if (!error.response.data) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    });
});

export const currentUser = createAsyncThunk<IUser, ICurrentUser>(
  "user/currentUser",
  async (payload: ICurrentUser) => {
    return axiosGql
      .post(
        "/graphql",
        { query: getCurrentUserQuery },
        { headers: { Cookie: `authToken=${payload.authToken}` },}
      )
      .then((res) => {
        console.log(res.data.data.currentUser);
        return res.data.data.currentUser;
      });
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    clearError(state) {
      state.error = "";
    },
    setName(state, action) {
      state.user.firstname = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.user,
      };
    },
    ["user/login/pending"]: (state) => {
      state.loading = true;
    },
    ["user/login/fulfilled"]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.loggedIn = true;
    },
    ["user/login/rejected"]: (state, action) => {
      state.loading = false;
      if (action.meta.rejectedWithValue) {
        state.error = action.payload?.error || "Something went wrong";
      } else {
        state.error = action.error.message || "Something went wrong";
      }
    },
    ["user/signup/pending"]: (state) => {
      state.loading = true;
    },
    ["user/signup/fulfilled"]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.loggedIn = true;
      state.error = "";
    },
    ["user/signup/rejected"]: (state, action) => {
      state.loading = false;
      if (action.meta.rejectedWithValue) {
        state.error = action.payload?.error || "Something went wrong";
      } else {
        state.error = action.error.message || "Something went wrong";
      }
    },
    ["user/currentUser/pending"]: (state) => {
      state.loading = true;
    },
    ["user/currentUser/fulfilled"]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.loggedIn = true;
      state.error = "";
    },
    ["user/currentUser/rejected"]: (state, action) => {
      state.error = action.error.message || "Something went wrong";
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
