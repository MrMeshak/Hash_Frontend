import React from 'react';
import { wrapper } from '../../../store/store';
import {getPost} from '../../../store/post/postSlice'
import { NextPage } from 'next';
import PostDetails from '../../../components/post/postDetails/PostDetails';
import { currentUser } from '../../../store/user/userSlice';


const Post:NextPage = (props) => {
  return (
      <PostDetails/>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store)=> async (context) => {
  console.log('cookies', context.req.cookies)
  const postId = context.params?.postId as string
  const {authToken} = context.req.cookies 
  console.log("Post ID",postId)

  if(!postId){
    return {props:{}}
  }

  if (authToken) {
    await store.dispatch(currentUser({authToken: authToken}))
    await store.dispatch(getPost({postId: postId, authToken: authToken}))
  } else {
    await store.dispatch(getPost({postId: postId, authToken: ""}))
  }

  return { props: {}}
})

export default Post