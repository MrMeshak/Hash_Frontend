import React from 'react';
import * as S from './LibraryFilterWidget.styles'
import { filterList, IFilter } from '../../../store/library/libraryModel';
import LibraryFilterBtn from './LibraryFilterBtn';
import { selectFilter, useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getFilteredLibrary, libraryActions } from '../../../store/library/librarySlice';

export interface ILibraryFilterWidgetProps {
}

export default function LibraryFilterWidget (props: ILibraryFilterWidgetProps) {
  const dispatch = useAppDispatch();
  const selectedFilter = useAppSelector(selectFilter())

  const setSelectedFilter = (filter: IFilter) => {
    dispatch(libraryActions.setFilter(filter))
    dispatch(getFilteredLibrary())
  }

  return (
    <S.Container>
      {filterList.map((filter)=>{
         return <LibraryFilterBtn 
          filter = {filter} 
          isSelected = {filter.value === selectedFilter.value} 
          setFilter = {setSelectedFilter}
          key = {filter.value}/>
      })}
    </S.Container>
  );
}