import React, { useEffect, useState } from 'react';
import * as S from './CountByStatusCard.styles'
import { statusValuesMap } from '../../../helpers/postStatusValueMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { axiosGql, getLibraryCountByStatusQuery } from '../../../services/gqlApi';

export interface ICountByStatusCardProps {
  status: string;
}

export default function CountByStatusCard (props: ICountByStatusCardProps) {
 const [count,setCount] = useState(0);

 useEffect(()=>{
  axiosGql
  .post(
    '/graphql',
    {query: getLibraryCountByStatusQuery,
    variables: {status: props.status}}
  )
  .then((res) => {
    console.log(res.data.data.libraryCountByStatus)
    setCount(res.data.data.libraryCountByStatus)
  })
  .catch((error) => console.log(error) )
 },[])

  return (
    <S.Container>
      <S.Title>
        <S.IconStatusSpan statusColor={statusValuesMap.get(props.status)?.color || "transparent"}><FontAwesomeIcon icon={faCircle} /></S.IconStatusSpan>
        {statusValuesMap.get(props.status)?.title}
      </S.Title>
      <S.Count>{count}</S.Count>
    </S.Container>
  );
}
