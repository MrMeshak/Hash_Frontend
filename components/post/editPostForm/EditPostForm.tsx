import React, { useState } from 'react';
import * as S from './EditPostForm.styles';
import {FormikErrors, useFormik} from 'formik';
import { useRouter } from 'next/router';
import { selectPost, selectUser, useAppSelector } from '../../../store/hooks';
import { categoryList, ICategory } from '../../../store/library/libraryModel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft, faAngleUp, faEdit } from '@fortawesome/free-solid-svg-icons';
import DropDown from '../../utility/dropDown/DropDown';
import { axiosGql, deletePostQuery, updatePostQuery } from '../../../services/gqlApi';


export interface IEditPostFormValues{
  title: string;
  category: ICategory;
  description: string;
}

export interface IEditPostFormProps {
}

export default function EditPostForm (props: IEditPostFormProps) {
  const router = useRouter();
  const user = useAppSelector(selectUser())
  const post = useAppSelector(selectPost())
  const [serverError, setServerError] = useState("")
  const [categoryListOpen, setCategoryListOpen] = useState(false)
  
  
  const initialValues: IEditPostFormValues = {
    title: post.title || "",
    category: categoryList.find((category)=> category.value === post.category) || categoryList[0],
    description: post.description || ""
  }

  const onSubmit = () => {
    console.log(formik.values)
    axiosGql
      .post('/graphql',
      {
        query: updatePostQuery,
        variables: {
          postId: post.id,
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
        router.replace('/')
      })
      .catch((error) => {
        setServerError(error.message)
      })
  }

  const validate = (values: IEditPostFormValues) => {
    let errors: FormikErrors<IEditPostFormValues> = {}
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
    formik.setFieldValue('category',selectedCategory)
    toggleCategoryList()
  }

  const handleDeleteBtn = () => {
    axiosGql
      .post('/graphql',
      {
        query: deletePostQuery,
        variables: {
          postId: post.id,
        }
      })
      .then((res) => {
        if(res.data.errors){
          setServerError(res.data.errors[0].message)
          return
        }
        router.replace('/')
      })
      .catch((error) => {
        setServerError(error.message)
      })
  }

  return (
    <S.Container>
      <S.BackLink onClick={()=>router.back}>
        <S.IconArrowSpan><FontAwesomeIcon icon={faAngleLeft}/></S.IconArrowSpan>
        Go Back
      </S.BackLink>
      <S.Form onSubmit={formik.handleSubmit}>
        <S.Icon><FontAwesomeIcon icon={faEdit}/></S.Icon>
        <S.Title>Editing &lsquo;{post.title}&rsquo; </S.Title>
        <S.FormControl>
          <S.Label>Feedback Title</S.Label>
          <S.Description>Add a short, descriptive headline</S.Description>
          <S.TextInput
            id='title'
            name='title'
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
            value= {formik.values.description} 
            onChange={formik.handleChange}
            onBlur= {formik.handleBlur}
            hasError={!!(formik.errors.description && formik.touched.description)}
          />
          {formik.touched.description && formik.errors.description ? <S.ErrorMessage>{formik.errors.description}</S.ErrorMessage> : null}
        </S.FormControl>
        <S.ErrorMessage>{serverError}</S.ErrorMessage>
        <S.ControlBar>
          <S.CancelSaveBtnContainer>
            <S.SavePostBtn type="submit">Save Changes</S.SavePostBtn>
            <S.CancelBtn type="button" onClick={() => router.back()} >Cancel</S.CancelBtn>
          </S.CancelSaveBtnContainer>
          <S.DeleteBtn type="button" onClick={handleDeleteBtn}>Delete</S.DeleteBtn>
        </S.ControlBar>
      </S.Form>
    </S.Container>
  );
}

