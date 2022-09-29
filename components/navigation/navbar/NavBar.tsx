import React, {useState, useEffect} from 'react';
import SideBar from '../sidebar/SideBar';
import TopBarMobile from '../topbar/TopBarMobile';
import TopBarTablet from '../topbar/TopBarTablet';


export interface INavBarProps {
}

export default function NavBar (props: INavBarProps) {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  const toggleSideBar = ()=>{
      setSideBarOpen(!sideBarOpen)
  }

  return (
    <div>
      <TopBarTablet/>
      <TopBarMobile sideBarOpen = {sideBarOpen} toggleSideBar={toggleSideBar}/>
      <SideBar sideBarOpen = {sideBarOpen} toggleSideBar={toggleSideBar}/>
    </div>
  );
}
