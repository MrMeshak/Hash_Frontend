import React from 'react';
import { wrapper } from '../../store/store';
import {getPost} from '../../store/post/postSlice'
import { NextPage } from 'next';
import Card from '../../components/post/card/Card';
import { selectPost, useAppSelector } from '../../store/hooks';
import PostDetails from '../../components/post/postDetails/PostDetails';
import { getCurrentUserQuery } from '../../services/gqlApi';
import { currentUser } from '../../store/user/userSlice';


const Post:NextPage = (props) => {
  return (
      <PostDetails/>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store)=> async (context) => {
  console.log('cookies', context.req.cookies)
  const postId = context.params?.postId as string
  const authToken = context.req.cookies.authToken
  console.log(postId)

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