import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userReducer from "./user/userSlice";
import libraryReducer from "./library/librarySlice";
import postReducer from "./post/postSlice";
import roadMapReducer from "./roadMap/roadMapSlice"

const makeStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
      library: libraryReducer,
      post: postReducer,
      roadMap: roadMapReducer
    },
    devTools: true,
  });

type AppStore = ReturnType<typeof makeStore>;

export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(makeStore);


