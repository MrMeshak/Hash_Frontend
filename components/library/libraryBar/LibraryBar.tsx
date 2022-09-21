import React, {useEffect, useState} from 'react';
import * as S from './LibraryBar.styles'
import Link from 'next/link';
import { selectSort, useAppDispatch, useAppSelector } from '../../../store/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import DropDown, { IOption } from '../../utility/dropDown/DropDown';
import { selectLoggedIn } from '../../../store/hooks';
import { sortList } from '../../../store/library/libraryModel';
import { getFilteredLibrary, libraryActions } from '../../../store/library/librarySlice';
import { ISort } from '../../../store/library/libraryModel';


export interface IPostBarProps {
}

export default function PostBar (props: IPostBarProps) {
  const dispatch = useAppDispatch();
  const sort = useAppSelector(selectSort())
  const loggedIn = useAppSelector(selectLoggedIn())

  const [sortListOpen, setSortListOpen] = useState(false)
  

  const toggleSortList = () => {
    setSortListOpen(!sortListOpen)
  }

  const handleSortSelection = (selectedSort:ISort) => {
    dispatch(libraryActions.setSort(selectedSort))
    dispatch(getFilteredLibrary())
    toggleSortList()
  }

  return (
    <S.Container>
      <S.SortFilter filterListOpen={sortListOpen}>
        Sort by : <S.SortSelectorBtn onClick={toggleSortList}>
          {sort.title} 
          <S.IconSpan>
            {sortListOpen?<FontAwesomeIcon icon={faAngleUp}/>:<FontAwesomeIcon icon={faAngleDown}/>}
          </S.IconSpan>
        </S.SortSelectorBtn>
        {sortListOpen? <DropDown list={sortList} optionSelected={sort.value} setSelected={handleSortSelection}/>: null}
      </S.SortFilter>

        {loggedIn?
          <Link href={"/post/addPost"}><S.AddFeedbackBtn>+ Add Feedback</S.AddFeedbackBtn></Link>:
          <Link href={"/login"}><S.LoginBtn>Login</S.LoginBtn></Link>
        }
    </S.Container>
  );
}
