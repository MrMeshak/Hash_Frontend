import React, {useState} from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faPlus, faAngleDown ,faAngleUp} from '@fortawesome/free-solid-svg-icons';
import { Formik, useFormik } from 'formik';
import * as S from './addPostForm.styles'
import DropDown from '../dropDown/DropDown';



export interface IPostAddFormValues{
  title: string;
  category: string;
  description: string;
}

export interface IPostAddFormProps {
}

export default function PostAddForm (props: IPostAddFormProps) {
  const router = useRouter();
  const [categoryListOpen, setCategoryListOpen] = useState(false)

  const categories = ['Feature','UI','UX','Enhancement','Bug']

  const initialValues: IPostAddFormValues = {
    title: "",
    category: "Feature",
    description: ""
  }

  const onSubmit = () => {
    console.log(formik.values)
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit
  })

  const toggleCategoryList = () => {
    setCategoryListOpen(!categoryListOpen)
  }



  return (
    <S.Container>
      <S.BackLink onClick={()=>router.back()} >
        <S.IconArrowSpan><FontAwesomeIcon icon={faAngleLeft}/></S.IconArrowSpan>
        Go Back
    </S.BackLink>  
      <S.Form onSubmit={formik.handleSubmit}>
        <S.Icon><FontAwesomeIcon icon={faPlus}/></S.Icon>
        <S.Title>Create New Feedback</S.Title>
        <S.FormControl>
          <S.Label >Feedback Title</S.Label>
          <S.Description>Add a short, descriptive headline</S.Description>
          <S.TextInput id='title' name='title' onChange={formik.handleChange}/>
        </S.FormControl>
        <S.FormControlDropDown>
          <S.Label>Category</S.Label>
          <S.Description>Choose a category for your feedback</S.Description>
          <S.DropDownBtn onClick={toggleCategoryList}>
            {formik.values.category}
            <S.IconArrowSpan><FontAwesomeIcon icon={categoryListOpen? faAngleUp:faAngleDown}/></S.IconArrowSpan>
          </S.DropDownBtn>
          {categoryListOpen?<DropDown list={categories} optionSelected={formik.values.category} />:null}
        </S.FormControlDropDown>
        <S.FormControl>
          <S.Label>Feedback Detail</S.Label>
          <S.Description>Include any specific comments on what should be improved, added, etc.</S.Description>
          <S.TextAreaInput 
            id='description' 
            name='description' 
            onChange={formik.handleChange}/>
        </S.FormControl>
        <S.addPostBtn>Add Feedback</S.addPostBtn>
        <S.cancelBtn>Cancel</S.cancelBtn>
      </S.Form>

    </S.Container>
  );
}
