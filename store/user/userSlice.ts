import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  axiosAuth,
  ILogin,
  ILoginRes,
  ISignup,
  ISignupRes,
} from "../../services/authApi";
import { IKnownError } from "../../services/gqlApi";
import { IUserState } from "./userModel";

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
  authToken: "",
  loggedIn: false,
  loading: false,
  error: "",
};

export const login = createAsyncThunk<
  ILoginRes,
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
  ISignupRes,
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

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.authToken = action.payload.authToken;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.authToken = action.payload.authToken;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
