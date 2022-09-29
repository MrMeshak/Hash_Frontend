import Link from 'next/link';
import { useEffect, useState } from 'react';
import { statusValues, statusValuesMap } from '../../../helpers/postStatusValueMap';
import { axiosGql, getLibraryCountByStatusQuery } from '../../../services/gqlApi';
import CountByStatusCard from './CountByStatusCard';
import * as S from './RoadMapWidget.styles'


export interface IRoadMapWidgetProps {
}

export default function RoadMapWidget (props: IRoadMapWidgetProps) {

  return (
    <S.Container>
      <S.TitleSection>
        <S.Title>Roadmap</S.Title>
        <Link href={'/roadmap'}><S.RoadMapLink>View</S.RoadMapLink></Link>
      </S.TitleSection>
      {statusValues.map((status,index) => {
        return <CountByStatusCard status={status} key={status+"Count"+index}/>
      })}
    </S.Container>
  );
}
