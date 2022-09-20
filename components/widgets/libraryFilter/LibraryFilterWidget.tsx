import React from 'react';
import * as S from './LibraryFilterWidget.styles'

export interface ILibraryFilterWidgetProps {
}

export default function LibraryFilterWidget (props: ILibraryFilterWidgetProps) {
  return (
    <S.Container>
      <S.FilterBtn>All</S.FilterBtn>
      <S.FilterBtn>UI</S.FilterBtn>
      <S.FilterBtn>UX</S.FilterBtn>
      <S.FilterBtn>Enhancement</S.FilterBtn>
      <S.FilterBtn>Bug</S.FilterBtn>
      <S.FilterBtn>Feature</S.FilterBtn>
    </S.Container>
  );
}