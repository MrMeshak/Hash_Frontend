import React, { useState } from 'react';
import { FormikErrors, useFormik } from 'formik';
import * as S from './AddCommentForm.styled'
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { addComment } from '../../../store/post/postSlice';

export interface IAddCommentFormValues{
  content: string;
}

export interface IAddCommentFormProps {
  postId: string;
}

export default function AddCommentForm (props: IAddCommentFormProps) {
  const maxTextAreaChar = 250;
  const dispatch = useAppDispatch();


  const intialValues:IAddCommentFormValues = {
    content: ""
  }

  const onSubmit = async (values:IAddCommentFormValues) => {
    try{
      await dispatch(addComment({postId: props.postId, content: values.content}))
      formik.resetForm()
    }catch(error){
      console.log(error)
    } 
  }

  const validate = (values:IAddCommentFormValues) => {
    let errors: FormikErrors<IAddCommentFormValues> = {}

    if(!values.content){
      errors.content = "Required"
    }else if(values.content.length > 250){
      errors.content = "Comment must be less than 250 Characters"
    }

    return errors
  }

  const formik = useFormik({
    initialValues: intialValues,
    onSubmit: onSubmit,
    validate: validate
  });


  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <S.Title>Add Comment</S.Title>
        <S.TextAreaInput 
          id='content'
          name='content'
          value = {formik.values.content}
          maxLength={maxTextAreaChar} 
          onChange = {formik.handleChange}
          onBlur = {formik.handleBlur}
          hasError={!!(formik.errors.content && formik.touched.content)}
        />
        {formik.touched.content && formik.errors.content ? <S.ErrorMessage>{formik.errors.content}</S.ErrorMessage> : null}
        <S.ErrorMessage>{useAppSelector(state => state.post.error)}</S.ErrorMessage>
          <S.BottomBar>
            {maxTextAreaChar - formik.values.content.length} Characters Left
            <S.SubmitBtn type="submit"> Post Comment </S.SubmitBtn>
          </S.BottomBar>
      </S.Form>
  );
}
