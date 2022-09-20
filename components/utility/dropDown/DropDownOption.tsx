import * as React from 'react';
import * as S from './DropDownOption.styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import { IOption } from './DropDown';

export interface IDropDownOptionProps {
    isTop: boolean;
    isBottom: boolean;
    isSelected: boolean;
    option: IOption;
    setSelected:Function
}

export default function DropDownOption (props: IDropDownOptionProps) {

  const handleClick =  () => {
    props.setSelected(props.option)
  }
  return (
    
    <S.Option 
    onClick={handleClick}
    isBottom = {props.isBottom}
    isTop ={props.isTop}
    isSelected = {props.isSelected}
    >
        {props.option.title}
        <S.IconSpan>{props.isSelected?<FontAwesomeIcon icon={faCheck}/>:null}</S.IconSpan>
    </S.Option>
  );
}

