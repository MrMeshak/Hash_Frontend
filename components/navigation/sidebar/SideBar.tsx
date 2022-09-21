import React, {useState} from 'react';
import * as S from './SideBar.styles'
import { useAppSelector } from '../../../store/hooks';
import PostFilterWidget from '../../widgets/libraryFilter/LibraryFilterWidget'
import RoadMapWidget from '../../widgets/roadMap/RoadMapWidget';
import { selectLoggedIn } from '../../../store/hooks';
import UserWidget from '../../widgets/user/UserWidget';




export interface ISideBarProps {
    sideBarOpen: boolean;
    toggleSideBar: Function;
}

export default function SideBar (props: ISideBarProps) {

  const handleOverlayClick = () => {
    props.toggleSideBar()
  }

  return (
    <S.Container sideBarOpen={props.sideBarOpen}>
        <S.SideBarContainer sideBarOpen={props.sideBarOpen}>
          {useAppSelector(selectLoggedIn())?<UserWidget/>:null} 
          <PostFilterWidget/>
          <RoadMapWidget/>
        </S.SideBarContainer>
        <S.Overlay sideBarOpen={props.sideBarOpen} onClick={handleOverlayClick}/>
    </S.Container>
  );
}