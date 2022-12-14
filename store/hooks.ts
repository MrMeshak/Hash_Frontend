import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

//Selectors
export const selectUser = () => (state: RootState) => state?.user.user;
export const selectUserId = () => (state: RootState) => state.user.user.id;
export const selectLoggedIn = () => (state: RootState) => state.user.loggedIn;

export const selectPosts = () => (state: RootState) => state.library.library.posts;
export const selectSort = () => (state: RootState) => state.library.library.sort;
export const selectFilter = () => (state: RootState) => state.library.library.filter;

export const selectPost = () => (state: RootState) => state.post.post;
export const selectPostError = () => (state: RootState) => state.post.error;

export const selectRoadMapLibraries = () => (state: RootState) => state.roadMap.libraries;
