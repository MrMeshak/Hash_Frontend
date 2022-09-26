import React, { useState } from 'react';
import { selectLoggedIn, useAppSelector } from '../../../store/hooks';
import { IComment } from '../../../store/post/postModel';
import AddReplyForm from '../../reply/addReplyForm/addReplyForm';
import ReplyList from '../../reply/replyList/ReplyList';
import * as S from './CommentCard.styles'

export interface ICommentCardProps {
  comment: IComment
  isFirst: boolean;
}

export default function CommentCard (props: ICommentCardProps) {
  const [addReplyFormOpen, setAddReplyFormOpen] = useState(false)
  const loggedIn = useAppSelector(selectLoggedIn());

  const toggleAddReplyForm = () => {
    setAddReplyFormOpen(!addReplyFormOpen)
  }

  return (
    <S.Container>
      {props.isFirst ? null : <S.Line />}
      <S.TitleContainer>
        <S.Author>{props.comment.author.firstname} {props.comment.author.lastname}</S.Author>
        {loggedIn? <S.ReplyBtn onClick = {toggleAddReplyForm}>Reply</S.ReplyBtn> : null}
      </S.TitleContainer>
      <S.Content> {props.comment.content}</S.Content>
      {addReplyFormOpen? <AddReplyForm commentId={props.comment.id} toggleAddReplyForm={toggleAddReplyForm}/> : null}
      {props.comment.replies ? <ReplyList replies={props.comment.replies}/>: null}
    </S.Container>
  );
}
