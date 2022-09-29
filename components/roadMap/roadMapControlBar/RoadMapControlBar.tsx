import { library } from '@fortawesome/fontawesome-svg-core';
import * as React from 'react';
import { selectRoadMapLibraries } from '../../../store/hooks';
import { IRoadMapLib } from '../../../store/roadMap/roadMapModel';
import * as S from './RoadMapControlBar.styles'

export interface IRoadMapControlBarProps {
  selectedStatus: string;
  libraries: IRoadMapLib[];
  setSelectedStatus: Function;
}

export default function RoadMapControlBar (props: IRoadMapControlBarProps) {
  return (
    <S.Container numberOfOptions={props.libraries.length}>
      {
        props.libraries.map((library) => {
          return (
            <S.SelectBtn 
            isSelected={library.value === props.selectedStatus} 
            onClick = {()=>props.setSelectedStatus(library.value)}
            key={library.value}>
              {`${library.title} (${library.posts.length})`}
            </S.SelectBtn>
          )
        })
      }
    </S.Container>
  );
}
