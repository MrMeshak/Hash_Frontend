import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import libraryReducer from "./library/librarySlice";

let store = configureStore({
  reducer: {
    user: userReducer,
    library: libraryReducer,
  },
});

export function getStore(incomingPreloadState?: RootState) {
  store = configureStore({
    reducer: {
      user: userReducer,
      library: libraryReducer,
    },
    preloadedState: incomingPreloadState,
  });
  return store;
}

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
