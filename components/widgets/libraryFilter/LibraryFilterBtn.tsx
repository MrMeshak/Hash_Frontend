import React from 'react';
import * as S from './LibraryFilterBtn.styles'
import { IFilter } from '../../../store/library/libraryModel';

export interface ILibraryFilterBtnProps {
  filter: IFilter;
  isSelected: boolean;
  setFilter: Function;
}



export default function LibraryFilterBtn (props: ILibraryFilterBtnProps) {
  const handleFilterBtnClick = () => {
    props.setFilter(props.filter)
  }
  return (
    <S.FilterBtn isSelected = {props.isSelected} onClick = {handleFilterBtnClick}>
      {props.filter.title}
    </S.FilterBtn>
  );
}