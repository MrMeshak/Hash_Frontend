import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';
import { IAddReplyFormProps } from '../../components/reply/addReplyForm/addReplyForm';
import { axiosGql, IGetPost, getPostQuery, IAddComment, addCommentQuery, addReplyQuery, IAddReply } from '../../services/gqlApi';
import { RootState } from '../store';
import {IComment, IPost, IPostState, IReply} from './postModel'

const initialState: IPostState = {
  post: {
    id: "",
    title: "",
    description: "",
    category: "",
    status: "",
    upVotes: 0,

    createdAt: null,
    updatedAt: null,
    authorId: "",
    
    commentCount: 0,
    comments: [],

    currentUserUpVote: false,

  },
  loading: false,
  error: ""
}

export const getPost = createAsyncThunk<IPost,IGetPost,{state: RootState}>(
  'post/getPost',
    async (payload:IGetPost,thunkAPI) => {
    return axiosGql
      .post(
      "/graphql",
        { 
          query: getPostQuery,
          variables:{postId: payload.postId},
        },
        {
          headers: { Cookie: `authToken=${payload.authToken}`}
        }
      )
      .then((res) => {
        return res.data.data.post
      })
  }
)

export const addComment = createAsyncThunk<IComment,IAddComment,{state: RootState}>(
  'post/addComment', 
  async (payload:IAddComment) => {
    return axiosGql
      .post(
        '/graphql',
        {
          query: addCommentQuery,
          variables: {postId: payload.postId, content: payload.content}
        }
      )
      .then((res) => res.data.data.addComment)
  }
)

export const addReply = createAsyncThunk<IReply,IAddReply,{state:RootState}>(
  'post/addReply', 
  async(payload: IAddReply) => {
    return axiosGql
      .post(
        '/graphql',
        {
          query: addReplyQuery,
          variables: {commentId: payload.commentId, content: payload.content}
        }
      )
      .then((res) => res.data.data.addReply)
  }
)


const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state,action) => {
      return {
        ...state,
        ...action.payload.post,
      };
    },
    ['post/getPost/pending']: (state) => {
        state.loading = true;
    },
    ['post/getPost/fulfilled']: (state,action) => {
        state.loading = false;
        state.post = action.payload
        state.error = "";
    },
    ['post/getPost/rejected']: (state,action) => {
        state.loading = false;
        console.log(action.error)
        state.error = action.error.message || "Something went wrong"
    },
    ['post/addComment/pending']: (state) => {
        state.loading = true;
    },
    ['post/addComment/fulfilled']: (state,action) => {
        state.loading = false;
        state.post.comments.push(action.payload);
        state.post.commentCount++;
        state.error = "";
    },
    ['post/addComment/rejected']: (state,action) => {
        state.loading = false;
        console.log(action.error)
        state.error = action.error.message || "Something went wrong"
    },
    ['post/addReply/pending']: (state) => {
        state.loading = true;
    },
    ['post/addReply/fulfilled']: (state,action) => {
        state.loading = false;
        console.log(action.payload)
        const commentIndex = state.post.comments.findIndex((comment)=>comment.id === action.payload.commentId)
        state.post.comments[commentIndex].replies.push(action.payload)
        state.error = "";
    },
    ['post/addReply/rejected']: (state,action) => {
        state.loading = false;
        console.log(action.error)
        state.error = action.error.message || "Something went wrong"
    }
  }
})



export default postSlice.reducer;
export const libraryActions = postSlice.actions;