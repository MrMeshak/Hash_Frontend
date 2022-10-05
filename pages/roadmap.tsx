import { NextPage } from "next"
import { promises } from "stream"
import RoadMapPage from "../components/pages/roadMapPage/RoadMapPage"
import RoadMapBar from "../components/roadMap/roadMapBar/RoadMapBar"
import RoadMapControlBar from "../components/roadMap/roadMapControlBar/RoadMapControlBar"
import RoadMapList from "../components/roadMap/roadMapList/RoadMapList"
import RoadMapListMobile from "../components/roadMap/roadMapListMobile/RoadMapListMobile"
import { getRoadMapLibQuery } from "../services/gqlApi"
import { getRoadMapLib } from "../store/roadMap/roadMapSlice"
import { wrapper } from "../store/store"
import { currentUser } from "../store/user/userSlice"

const RoadMap: NextPage = (props) => {

  return(
    <>
      <RoadMapPage/>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const libraries = store.getState().roadMap.libraries
  const authToken = context.req.cookies.authToken 

  if(authToken){
    await store.dispatch(currentUser({authToken: authToken }))
    await Promise.all(libraries.map(async (library) => {
      await store.dispatch(getRoadMapLib({authToken: authToken,status: library.value}))
    }))
  }else{
    await Promise.all(libraries.map(async (library) => {
      await store.dispatch(getRoadMapLib({ authToken:"", status: library.value }))
    }))
  }
  
  return {
    props:{},
  }
})

export default RoadMap

