
import React from 'react';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Post from '../../../pages/post/[postId]';
import { ILibPost} from '../../../store/library/libraryModel';
import { IStatus, statusList } from '../../../store/roadMap/roadMapModel';
import { IPost } from '../../../store/post/postModel';
import Card from '../card/Card';
import * as S from './CardWithStatus.styles' 

export interface ICardWithStatusProps {
  post: ILibPost
}

export default function CardWithStatus (props: ICardWithStatusProps) {

  const status:IStatus = statusList.find((status) => status.value === props.post.status) || statusList[0]
  
  if(status.value === "NONE"){
    return <Card post={props.post} />
  }

  return (
    <S.Container>
      <S.ColorAccent statusColor={status.color}/>
      <S.StatusInfo>
        <S.IconStatusSpan statusColor={status.color}><FontAwesomeIcon icon={faCircle} /></S.IconStatusSpan>
        <S.Status>{status.title}</S.Status>
      </S.StatusInfo>
      <Card post={props.post}/>
    </S.Container>
  );
}
