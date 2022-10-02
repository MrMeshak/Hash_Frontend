import React from 'react';
import { selectLoggedIn, useAppSelector } from '../../../store/hooks';
import LibraryFilterWidget from '../../widgets/libraryFilter/LibraryFilterWidget';
import RoadMapWidget from '../../widgets/roadMap/RoadMapWidget';
import UserWidget from '../../widgets/user/UserWidget';
import * as S from './TopBarTablet.styles'

export interface ITopBarTabletProps {
}

export default function TopBarTablet (props: ITopBarTabletProps) {
  const loggedIn = useAppSelector(selectLoggedIn())
  return (
    <S.Container>
        <S.TitleContainer>
          <S.Title># Hash</S.Title>
          <S.Subtitle>Developer Community</S.Subtitle>    
        </S.TitleContainer>
        {loggedIn ? <UserWidget/> : null}
      <LibraryFilterWidget/>
      <RoadMapWidget/>
    </S.Container>
  );
}
