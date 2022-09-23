import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import * as React from 'react';
import { selectLoggedIn, selectPost, useAppSelector } from '../../../store/hooks';
import AddCommentForm from '../../comment/addCommentForm/AddCommentForm';
import CommentList from '../../comment/commentList/CommentList';
import Card from '../card/Card';
import * as S from './PostDetails.styles'

export interface IPostDetailsProps {
}

export default function PostDetails (props: IPostDetailsProps) {
  const router = useRouter();
  const post = useAppSelector(selectPost());
  const loggedIn = useAppSelector(selectLoggedIn());
  
  return (
    <S.Container>
      <S.PostDetailsTopBar>
        <S.BackLink onClick={() => router.back()}>
          <S.IconArrowSpan><FontAwesomeIcon icon={faAngleLeft} /></S.IconArrowSpan>
          Go Back
        </S.BackLink>
        {loggedIn? <S.EditPostBtn>Edit Feedback</S.EditPostBtn>: null}
      </S.PostDetailsTopBar>
      <Card post = {post}/>
     {post.commentCount?<CommentList commentCount={post.commentCount} comments={post.comments}/>:null}
     {loggedIn? <AddCommentForm postId = {post.id}/> : null}
    </S.Container>
  );
}

