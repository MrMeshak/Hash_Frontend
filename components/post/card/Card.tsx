import React, {useEffect, useState} from 'react';
import * as S from './Card.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faComment } from '@fortawesome/free-solid-svg-icons';
import { ILibPost } from '../../../store/library/libraryModel';
import { set } from 'immer/dist/internal';
import { axiosGql, toggleUpVoteQuery } from '../../../services/gqlApi';
import { selectLoggedIn, useAppDispatch, useAppSelector } from '../../../store/hooks';

export interface ICardProps {
  post:ILibPost
}

export default function Card (props: ICardProps) {
  const post = props.post
  const dispatch = useAppDispatch()
  const loggedIn = useAppSelector(selectLoggedIn())

  const [voteCountBtnActive, setVoteCountBtnActive] = useState(post.currentUserUpVote)
  const [upVotes , setUpVotes] = useState(post.upVotes)

  useEffect(() => {
    setVoteCountBtnActive(post.currentUserUpVote)
  },[post.currentUserUpVote])
 
  const handleVoteCountBtn = async () => {
    console.log("handleVoteCountBtn")
    if(loggedIn){ 
      axiosGql
      .post("/graphql",
        { query: toggleUpVoteQuery,
        variables: {postId: post.id}})
      .then(() => {
        setVoteCountBtnActive(!voteCountBtnActive)
        if(voteCountBtnActive){
        setUpVotes(upVotes - 1)
        }else{
        setUpVotes(upVotes + 1)
        }
      })
    }
  }

  return (
    <S.Container>
      <S.Title>{post.title}</S.Title>
      <S.Description>{post.description}</S.Description>
      <S.Tag>{post.category}</S.Tag>
      <S.PostInforContainer>
          <S.VoteCountBtn active = {voteCountBtnActive} onClick = {handleVoteCountBtn}>
            <S.IconVoteSpan active = {voteCountBtnActive}><FontAwesomeIcon icon={faAngleUp}/></S.IconVoteSpan>
            {upVotes}
          </S.VoteCountBtn>
          <S.CommentCount><S.IconCommmentSpan><FontAwesomeIcon icon={faComment}/></S.IconCommmentSpan>{post.commentCount}</S.CommentCount>
      </S.PostInforContainer>
    </S.Container>
  );
}

