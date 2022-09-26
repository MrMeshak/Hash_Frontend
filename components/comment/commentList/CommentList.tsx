import React from 'react';
import * as S from './CommentList.styles'
import { IComment, IReply } from '../../../store/post/postModel';
import CommentCard from '../commentCard/CommentCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import ReplyList from '../../reply/replyList/ReplyList';

export interface ICommentListProps {
  commentCount: number;
  comments: IComment[];
}

export default function CommentList (props: ICommentListProps) {
  const router = useRouter();

  return (
    <S.Container>
      <S.Title>{props.commentCount} {props.commentCount === 1? "Comment": "Comments"}</S.Title>
      {props.comments.map((comment,index)=> <CommentCard comment={comment}  isFirst={index === 0} key={comment.id}/>)}
    </S.Container>
  );
}
