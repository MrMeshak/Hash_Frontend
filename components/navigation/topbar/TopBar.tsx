import * as React from 'react';
import * as S from './TopBar.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons'

export interface ITopBarProps {
  sideBarOpen: boolean;
  toggleSideBar: Function;
}

export default function TopBar (props: ITopBarProps) {
  return (
     <>
      <S.Container>
          <div>
              <S.Title>Frontend Mentor</S.Title>
              <S.Subtitle>Feedback Board</S.Subtitle>
          </div>
          <S.MenuBtn onClick={()=>props.toggleSideBar()}><FontAwesomeIcon icon={props.sideBarOpen?faXmark:faBars}/></S.MenuBtn> 
      </S.Container>
    </>
  );
}
