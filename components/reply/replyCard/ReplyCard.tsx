import React from 'react';
import { IReply } from '../../../store/post/postModel';
import * as S from './ReplyCard.styles'

export interface IReplyCardProps {
  reply:IReply;
  isLast: boolean;
}

export default function ReplyCard (props: IReplyCardProps) {
  return (
    <S.Container>
      <S.VerticalLine isLast = {props.isLast}/>
      <S.ReplyContainer>
        <S.TitleContainer>
        <S.Author>{props.reply.author.firstname} {props.reply.author.lastname}</S.Author>
        </S.TitleContainer>
        <S.Content>{props.reply.content}</S.Content>
      </S.ReplyContainer>
    </S.Container>
  );
}
  