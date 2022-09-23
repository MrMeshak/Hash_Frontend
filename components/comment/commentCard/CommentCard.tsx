import * as React from 'react';
import { IComment } from '../../../store/post/postModel';
import * as S from './CommentCard.styles'

export interface ICommentCardProps {
  comment: IComment
}

export default function CommentCard (props: ICommentCardProps) {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Author>{props.comment.author.firstname} {props.comment.author.lastname}</S.Author>
        <S.ReplyBtn>Reply</S.ReplyBtn>
      </S.TitleContainer>
      <S.Content> {props.comment.content}</S.Content>
    </S.Container>
  );
}
