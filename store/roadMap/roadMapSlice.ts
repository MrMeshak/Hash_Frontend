import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { axiosGql, getRoadMapLibQuery, IGetRoadMapLib, IGetRoadMapLibRes } from '../../services/gqlApi';
import { IFilter, ILibPost, ILibraryState, ISort } from '../library/libraryModel';
import { RootState } from '../store';
import { IRoadMapState } from './roadMapModel';
import { statusValuesMap } from '../../helpers/postStatusValueMap';

const initialState: IRoadMapState = {
  libraries: [
    {
      title: 'Planned',
      value: 'PLANNED',
      description: 'Ideas priortized for reasearch',
      posts: []
    },
    {
      title: 'In-Progress',
      value: 'INPROGRESS',
      description: 'Currently being developed',
      posts: []
    },
    {
      title: 'Live',
      value: 'LIVE',
      description: 'Released Features',
      posts: []
    }
  ],
  loading: false,
  error: ''
};

export const getRoadMapLib = createAsyncThunk<IGetRoadMapLibRes, IGetRoadMapLib, { state: RootState }>('roadMap/getRoadMapLib', async (payload: IGetRoadMapLib) => {
  return axiosGql
    .post(
      '/graphql',
      {
        query: getRoadMapLibQuery,
        variables: { status: payload.status }
      },
      {
        headers: { Cookie: `authToken=${payload.authToken}` }
      }
    )
    .then((res) => {
      return {
        status: payload.status,
        posts: res.data.data.postsByStatus
      };
    });
});

const roadMapSlice = createSlice({
  name: 'roadMap',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.roadMap
      };
    },
    ['roadMap/getRoadMapLib/pending']: (state) => {
      state.loading = true;
    },
    ['roadMap/getRoadMapLib/fulfilled']: (state, action) => {
      console.log(action.payload);
      state.loading = false;
      if (action.payload.status === 'PLANNED') {
        state.libraries[0].posts = action.payload.posts;
      } else if (action.payload.status === 'INPROGRESS') {
        state.libraries[1].posts = action.payload.posts;
      } else if (action.payload.status === 'LIVE') {
        state.libraries[2].posts = action.payload.posts;
      }
      state.error = '';
    },
    ['roadMap/getRoadMapLib/rejected']: (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    }
  }
});

export default roadMapSlice.reducer;
export const roadMapActions = roadMapSlice.actions;
