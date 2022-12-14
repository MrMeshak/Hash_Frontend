import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import  {useSelector} from 'react-redux'
import { selectPosts, useAppDispatch, useAppSelector } from '../store/hooks'
import { axiosGql, getLibraryQuery } from '../services/gqlApi'

import NavBar from '../components/navigation/navbar/NavBar'
import { wrapper } from '../store/store'
import { selectUser } from '../store/hooks'
import { currentUser } from '../store/user/userSlice'
import { userActions } from '../store/user/userSlice'
import { getLibrary } from '../store/library/librarySlice'
import LibraryBar from '../components/library/libraryBar/LibraryBar'
import PostList from '../components/library/postList/PostList'
import HomePage from '../components/pages/homePage/homePage'

const Home: NextPage = (props) => {
  const posts = useAppSelector(selectPosts())
  return (
    <div>
      <HomePage posts={posts}/>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps( (store) => async (context) => {
  console.log('cookies HomePage',context.req.cookies)
  const {authToken} = context.req.cookies 
  if(authToken){
    await store.dispatch(currentUser({authToken: authToken }))
    await store.dispatch(getLibrary({authToken: authToken})) 
  }else{
    await store.dispatch(getLibrary({authToken: ""})) 
  }
  return {
    props: {}
  }
})

export default Home
