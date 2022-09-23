import React from 'react';
import { FormikErrors, useFormik } from 'formik';
import * as S from './AddCommentForm.styled'

export interface IAddCommentFormValues{
  content: string;
}

export interface IAddCommentFormProps {
}

export default function AddCommentForm (props: IAddCommentFormProps) {

  const maxTextAreaChar = 250;
  const intialValues:IAddCommentFormValues = {
    content: ""
  }

  const onSubmit = (values:IAddCommentFormValues) => {

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
          maxLength={maxTextAreaChar} 
          onChange = {formik.handleChange}
          onBlur = {formik.handleBlur}
          hasError={!!(formik.errors.content && formik.touched.content)}
        />
        {formik.touched.content && formik.errors.content ? <S.ErrorMessage>{formik.errors.content}</S.ErrorMessage> : null}

          <S.BottomBar>
            {maxTextAreaChar - formik.values.content.length} Characters Left
            <S.SubmitBtn> Post Comment </S.SubmitBtn>
          </S.BottomBar>
      </S.Form>
  );
}
