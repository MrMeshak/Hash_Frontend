import React from 'react';
import { IReply } from '../../../store/post/postModel';
import ReplyCard from '../replyCard/ReplyCard';
import * as S from './ReplyList.styles'

export interface IReplyListProps {
  replies: IReply[];
}

export default function ReplyList (props: IReplyListProps) {
  return (
    <S.Container>
      <S.ListContainer>
        {props.replies.map((reply,index) => ( 
          <ReplyCard 
            reply={reply} 
            isLast={index === props.replies.length-1} 
            key={reply.id}/>
          ))
        }
      </S.ListContainer> 
    </S.Container>
  );
}


 