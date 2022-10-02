import * as React from 'react';
import * as S from './TopBarMobile.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons'

export interface ITopBarMobileProps {
  sideBarOpen: boolean;
  toggleSideBar: Function;
}

export default function TopBarMobile (props: ITopBarMobileProps) {
  return (
     <>
      <S.Container>
          <div>
              <S.Title># Hash</S.Title>
              <S.Subtitle>Developer Community</S.Subtitle>
          </div>
          <S.MenuBtn onClick={()=>props.toggleSideBar()}><FontAwesomeIcon icon={props.sideBarOpen?faXmark:faBars}/></S.MenuBtn> 
      </S.Container>
    </>
  );
}
