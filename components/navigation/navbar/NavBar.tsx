import React, {useState} from 'react';
import SideBar from '../sidebar/SideBar';
import TopBar from '../topbar/TopBar';

export interface INavBarProps {
}

export default function NavBar (props: INavBarProps) {
    const [sideBarOpen, setSideBarOpen] = useState(false)

    const toggleSideBar = ()=>{
        setSideBarOpen(!sideBarOpen)
    }

  return (
    <div>
      <TopBar sideBarOpen = {sideBarOpen} toggleSideBar={toggleSideBar}/>
      <SideBar sideBarOpen = {sideBarOpen}/>
    </div>
  );
}
