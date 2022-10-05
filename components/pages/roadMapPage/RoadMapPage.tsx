import React from 'react';
import RoadMapBar from '../../roadMap/roadMapBar/RoadMapBar';
import RoadMapList from '../../roadMap/roadMapList/RoadMapList';
import RoadMapListMobile from '../../roadMap/roadMapListMobile/RoadMapListMobile';
import * as S from './RoadMapPage.styles'

export interface IRoadMapPageProps {
}

export default function RoadMapPage (props: IRoadMapPageProps) {
  return (
    <>
      <S.ContainerMobile>
        <RoadMapBar/>
        <RoadMapListMobile/>
      </S.ContainerMobile>
      <S.ContainerTablet>
        <RoadMapBar/>
        <RoadMapList/>
      </S.ContainerTablet>
    </>
    
  );
}
