import React from 'react';
import LibraryFilterWidget from '../../widgets/libraryFilter/LibraryFilterWidget';
import RoadMapWidget from '../../widgets/roadMap/RoadMapWidget';
import * as S from './TopBarTablet.styles'

export interface ITopBarTabletProps {
}

export default function TopBarTablet (props: ITopBarTabletProps) {
  return (
    <S.Container>
      <S.TitleContainer>
          <S.Title>Frontend Mentor</S.Title>
          <S.Subtitle>Feedback Board</S.Subtitle>
      </S.TitleContainer>
      <LibraryFilterWidget/>
      <RoadMapWidget/>
    </S.Container>
  );
}
