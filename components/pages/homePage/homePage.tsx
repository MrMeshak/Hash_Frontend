import * as React from 'react';
import * as S from './homePage.styles'
import { ILibPost } from '../../../store/library/libraryModel';
import LibraryBar from '../../library/libraryBar/LibraryBar';
import PostList from '../../library/postList/PostList';
import NavBar from '../../navigation/navbar/NavBar';


export interface IHomePageProps {
  posts: ILibPost[]
}

export default function HomePage (props: IHomePageProps) {
  return (
    <S.Container>
      <NavBar/>
      <S.LibraryContainer>
        <LibraryBar/>
        <PostList posts={props.posts} displayLibraryEmpty={true} displayPostWithStatus={false}/>
      </S.LibraryContainer>
    </S.Container>
  );
}
