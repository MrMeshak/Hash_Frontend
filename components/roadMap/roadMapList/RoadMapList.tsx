import React from 'react';
import { selectRoadMapLibraries, useAppSelector } from '../../../store/hooks';
import PostList from '../../library/postList/PostList';
import * as S from './RoadMapList.styles'

export interface IRoadMapListProps {
}

export default function RoadMapList (props: IRoadMapListProps) {
  const libraries = useAppSelector(selectRoadMapLibraries())
  return (
    <S.Container>
      {libraries.map((library) => {
        return (
          <S.LibraryContainer>
            <S.LibraryInfoContainer>
                <S.LibraryTitle>{library.title} ({library.posts.length})</S.LibraryTitle>
                <S.LibraryDescription>{library.description}</S.LibraryDescription>
            </S.LibraryInfoContainer>
            <PostList posts={library.posts} displayLibraryEmpty={false} displayPostWithStatus={true}/>
          </S.LibraryContainer>
        )
      })}
    </S.Container>
  );
}
