import React,{useEffect} from 'react';
import { selectPosts, useAppSelector } from '../../../store/hooks';
import { ILibPost } from '../../../store/library/libraryModel';
import Card from '../../post/card/Card';
import CardWithStatus from '../../post/cardStatus/CardWithStatus';
import LibraryEmpty from '../libraryEmpty/LibraryEmpty';
import * as S from './PostList.styles'

export interface IPostListProps {
  displayLibraryEmpty:boolean;
  displayPostWithStatus: boolean;
  posts: ILibPost[]
}

export default function PostList (props: IPostListProps) {

  return (
    <S.Container>
        { (props.posts.length === 0 && props.displayLibraryEmpty) ? <LibraryEmpty/>: null}
        {props.posts.map((post) => props.displayPostWithStatus? <CardWithStatus post={post} key={post.id}/> : <Card post={post} key={post.id}/>)}
    </S.Container>
  );
}
