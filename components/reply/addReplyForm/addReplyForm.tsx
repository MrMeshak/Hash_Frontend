import React from 'react';
import { FormikConsumer, FormikErrors, useFormik } from 'formik';
import * as S from './addReplyForm.styles'
import { IAddCommentFormValues } from '../../comment/addCommentForm/AddCommentForm';
import { selectPostError, useAppDispatch, useAppSelector } from '../../../store/hooks';
import { addReply } from '../../../store/post/postSlice';

export interface IAddReplyFormValues{
  content: string;
}

export interface IAddReplyFormProps {
  commentId: string;
  toggleAddReplyForm: Function;
}

export default function AddReplyForm (props: IAddReplyFormProps) {
  const maxTextAreaChar = 250;
  const dispatch = useAppDispatch();


  const initialValues: IAddReplyFormValues = {
    content: ""
  }

  const onSubmit = async (values:IAddCommentFormValues) => {
    await dispatch(addReply({commentId: props.commentId , content: formik.values.content}))
    props.toggleAddReplyForm();
  }

  const validate = (values:IAddReplyFormValues) => {
    let errors: FormikErrors<IAddCommentFormValues> = {}

    if (!values.content) {
      errors.content = "Required"
    } else if (values.content.length > 250) {
      errors.content = "Comment must be less than 250 Characters"
    }
    return errors
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validate: validate
  })

  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <S.TextAreaInput
        id='content'
        name='content'
        value={formik.values.content}
        maxLength={maxTextAreaChar} 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        hasError={!!(formik.errors.content && formik.touched.content)}
      />
      <S.ErrorMessage>{formik.errors.content}</S.ErrorMessage>
      <S.ErrorMessage>{useAppSelector(selectPostError())}</S.ErrorMessage>
      <S.BottomBar>
        {maxTextAreaChar - formik.values.content.length} Characters Left
        <S.AddReplyBtn type="submit"> Post Reply </S.AddReplyBtn>
      </S.BottomBar>
    </S.Form>
  );
}
