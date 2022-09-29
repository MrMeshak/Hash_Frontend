
import React, { useEffect, useState } from 'react';
import { faAngleUp, faCircle, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Post from '../../../pages/post/[postId]';
import { ILibPost} from '../../../store/library/libraryModel';
import { IPost } from '../../../store/post/postModel';
import Card from '../card/Card';
import { statusValuesMap } from '../../../helpers/postStatusValueMap';
import * as S from './CardWithStatus.styles' 
import { selectLoggedIn, useAppSelector } from '../../../store/hooks';
import { axiosGql, toggleUpVoteQuery } from '../../../services/gqlApi';
import Link from 'next/link';

export interface ICardWithStatusProps {
  post: ILibPost
}

export default function CardWithStatus (props: ICardWithStatusProps) {
  const post = props.post
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
      <S.ColorAccent statusColor={statusValuesMap.get(props.post.status)?.color || "transparent"}/>
      <S.StatusInfo>
        <S.IconStatusSpan statusColor={statusValuesMap.get(props.post.status)?.color || "transparent"}><FontAwesomeIcon icon={faCircle} /></S.IconStatusSpan>
        <S.Status>{statusValuesMap.get(props.post.status)?.title}</S.Status>
      </S.StatusInfo>
      
      <S.CardContainer>
        <Link href={'/post/'+ post.id}><S.Title>{post.title}</S.Title></Link>
        <S.Description>{post.description}</S.Description>
        <S.Tag>{post.category}</S.Tag>
        <S.PostInfoContainer>
            <S.VoteCountBtn active = {voteCountBtnActive} onClick = {handleVoteCountBtn}>
              <S.IconVoteSpan active = {voteCountBtnActive}><FontAwesomeIcon icon={faAngleUp}/></S.IconVoteSpan>
              {upVotes}
            </S.VoteCountBtn>
            <S.CommentCount><S.IconCommmentSpan><FontAwesomeIcon icon={faComment}/></S.IconCommmentSpan>{post.commentCount}</S.CommentCount>
        </S.PostInfoContainer>
    </S.CardContainer>

    </S.Container>
  );
}
