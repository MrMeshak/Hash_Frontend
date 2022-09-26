import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import {IFilter, ILibPost, ILibraryState, ISort} from "../library/libraryModel";
import { IRoadMapState } from './roadMapModel';


const initialState:IRoadMapState = {
    plannedLib: {
      library: {
      posts: [],
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
  },
  inprogressLib: {
    library: {
      posts: [],
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
  },
  liveLib: {
    library: {
      posts: [],
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
  }
}

const roadMapSlice = createSlice({
  name: "roadMap",
  initialState: initialState,
  reducers: {

  },
  extraReducers: {
    [HYDRATE]: (state,action) => {
      return{
        ...state,
        ...action.payload.roadMap
      }
    }
  }
})

export default roadMapSlice.reducer
export const roadMapActions = roadMapSlice.actions;