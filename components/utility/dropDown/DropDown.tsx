import { listenerCount } from 'process';
import React, {useState} from 'react';
import * as S from './DropDown.styles';
import DropDownOption from './DropDownOption' 

export interface IOption{
    title: string;
    value: string;
}

export interface IDropDownProps {
    list: IOption[];
    optionSelected: string;
    setSelected: Function;
}

export default function DropDown (props: IDropDownProps) {
    

    return (
        <S.Container>
            {props.list.map((option,index) => {
            return <DropDownOption
                key={option.value}
                isTop={index===0?true:false} 
                isBottom={index===props.list.length-1?true:false} 
                option = {option}
                isSelected={option.value === props.optionSelected?true:false}
                setSelected = {props.setSelected}
            />})}
        </S.Container>
    );
}
