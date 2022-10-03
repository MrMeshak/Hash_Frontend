import React, {useState} from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faPlus, faAngleDown ,faAngleUp} from '@fortawesome/free-solid-svg-icons';
import { Formik, FormikErrors, useFormik } from 'formik';
import * as S from './AddPostForm.styles'
import DropDown from '../../utility/dropDown/DropDown'
import { categoryList, ICategory } from '../../../store/library/libraryModel';
import axios from 'axios';
import { addPostQuery, axiosGql } from '../../../services/gqlApi';



export interface IAddPostFormValues{
  title: string;
  category: ICategory;
  description: string;
}

export interface IAddPostFormProps {
}

export default function AddPostForm (props: IAddPostFormProps) {
  const router = useRouter();
  const [serverError, setServerError] = useState("")
  const [categoryListOpen, setCategoryListOpen] = useState(false)

  const initialValues: IAddPostFormValues = {
    title: "",
    category: categoryList[0],
    description: ""
  }

  const onSubmit = () => {
    console.log(formik.values)
    axiosGql
      .post('/graphql',
      {
        query: addPostQuery,
        variables: {
          title: formik.values.title, 
          description: formik.values.description, 
          category: formik.values.category.value
        }
      })
      .then((res) => {
        if(res.data.errors){
          setServerError(res.data.errors[0].message)
          return
        }
        router.back()
      })
      .catch((error) => {
        setServerError(error.message)
      })
  }

  const validate = (values: IAddPostFormValues) => {
    let errors: FormikErrors<IAddPostFormValues> = {}
    if(!values.title){
      errors.title = "Required"
    }else if(values.title.length > 80){
      errors.title = "Title must be less than 80 characters"
    }

    if(!values.description){
      errors.description = "Required"
    }
    console.log(errors)

    return errors
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validate: validate
  })

  const toggleCategoryList = () => {
    setCategoryListOpen(!categoryListOpen)
  }

  const setSelectedCategory = (selectedCategory:ICategory) => {
    formik.setFieldValue('category', selectedCategory)
    toggleCategoryList()
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
          <S.TextInput 
            id='title' 
            name='title' 
            onChange={formik.handleChange} 
            onBlur = {formik.handleBlur}
            hasError={!!(formik.errors.title && formik.touched.title)}
          />
          {formik.touched.title && formik.errors.title ? <S.ErrorMessage>{formik.errors.title}</S.ErrorMessage> : null}
        </S.FormControl>
        <S.FormControlDropDown>
          <S.Label>Category</S.Label>
          <S.Description>Choose a category for your feedback</S.Description>
          <S.DropDownBtn type="button" onClick={toggleCategoryList}>
            {formik.values.category.title}
            <S.IconArrowSpan><FontAwesomeIcon icon={categoryListOpen? faAngleUp:faAngleDown}/></S.IconArrowSpan>
          </S.DropDownBtn>
          {categoryListOpen?<DropDown list={categoryList} optionSelected={formik.values.category.value} setSelected={setSelectedCategory}/>:null}
        </S.FormControlDropDown>
        <S.FormControl>
          <S.Label>Feedback Detail</S.Label>
          <S.Description>Include any specific comments on what should be improved, added, etc.</S.Description>
          <S.TextAreaInput 
            id='description' 
            name='description' 
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur}
            hasError={!!(formik.errors.description && formik.touched.description)}
          />
          {formik.touched.description && formik.errors.description ? <S.ErrorMessage>{formik.errors.description}</S.ErrorMessage> : null}
        </S.FormControl>
        <S.ErrorMessage>{serverError}</S.ErrorMessage>
        <S.ControlBar>
          <S.AddPostBtn type="submit">Add Feedback</S.AddPostBtn>
          <S.CancelBtn type="button" onClick={() => router.back()} >Cancel</S.CancelBtn>
        </S.ControlBar>
      </S.Form>
    </S.Container>
  );
}
