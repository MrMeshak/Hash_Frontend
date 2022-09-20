import React, {useEffect, useState} from 'react';
import * as S from './LibraryBar.styles'
import Link from 'next/link';
import { selectSort, useAppSelector } from '../../../store/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import DropDown, { IOption } from '../../utility/dropDown/DropDown';
import { selectLoggedIn } from '../../../store/hooks';
import { sortList } from '../../utility/filterSort/filterSortHelper';


export interface IPostBarProps {
}

export default function PostBar (props: IPostBarProps) {
  const sort = useAppSelector(selectSort())

  const [sortListOpen, setSortListOpen] = useState(false)
  const [selectedSort, setSelectedSort] = useState(sort)
  const loggedIn = useAppSelector(selectLoggedIn())

  const toggleSortList = () => {
    setSortListOpen(!sortListOpen)
  }

  const handleSortDropdown = (option:IOption) => {
    setSelectedSort(option),
    toggleSortList()
  }

  return (
    <S.Container>
      <S.SortFilter filterListOpen={sortListOpen}>
        Sort by : <S.SortSelectorBtn onClick={toggleSortList}>
          {selectedSort.title} 
          <S.IconSpan>
            {sortListOpen?<FontAwesomeIcon icon={faAngleUp}/>:<FontAwesomeIcon icon={faAngleDown}/>}
          </S.IconSpan>
        </S.SortSelectorBtn>
        {sortListOpen? <DropDown list={sortList} optionSelected={selectedSort.value} setSelected={handleSortDropdown}/>: null}
      </S.SortFilter>

        {loggedIn?
          <Link href={"/"}><S.AddFeedbackBtn>+ Add Feedback</S.AddFeedbackBtn></Link>:
          <Link href={"/login"}><S.LoginBtn>Login</S.LoginBtn></Link>
        }
    </S.Container>
  );
}
