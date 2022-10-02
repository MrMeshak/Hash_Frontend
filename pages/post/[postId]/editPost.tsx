import { NextPage } from 'next';
import * as React from 'react';
import EditPostForm from '../../../components/post/editPostForm/EditPostForm';
import { getPost } from '../../../store/post/postSlice';
import { wrapper } from '../../../store/store';
import { currentUser } from '../../../store/user/userSlice';



const EditPost:NextPage  = (props) => {
  return (
    <EditPostForm/>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store)=> async (context) => {
  console.log('cookies', context.req.cookies)
  const postId = context.params?.postId as string
  const {authToken} = context.req.cookies
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

export default EditPost