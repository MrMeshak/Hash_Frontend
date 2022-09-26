import React,{useEffect} from 'react';
import { selectPosts, useAppSelector } from '../../../store/hooks';
import Card from '../../post/card/Card';
import CardWithStatus from '../../post/cardStatus/CardWithStatus';
import LibraryEmpty from '../libraryEmpty/LibraryEmpty';
import * as S from './PostList.styles'

export interface IPostListProps {
}

export default function PostList (props: IPostListProps) {
  const posts = useAppSelector(selectPosts())


  return (
    <S.Container>
        {posts.length === 0? <LibraryEmpty/>: null}
        {posts.map((post) => <CardWithStatus post={post} key={post.id}/>)}
    </S.Container>
  );
}
