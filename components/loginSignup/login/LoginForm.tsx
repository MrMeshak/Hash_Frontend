import React,{useEffect} from 'react';
import * as S from './LoginForm.styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import validator from 'validator';


import { useFormik, FormikErrors } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faKey} from '@fortawesome/free-solid-svg-icons';
import { selectLoggedIn, useAppDispatch, useAppSelector } from '../../../store/hooks';
import { login, userActions} from '../../../store/user/userSlice';

export interface ILoginFormValues{
    email: string;
    password: string;
}

export interface ILoginFormProps {

}

export default function LoginForm(props:ILoginFormProps){
    const router = useRouter();
    const dispatch = useAppDispatch();

    const initialValues:ILoginFormValues = {
        email: "",
        password: "",
    }

    const onSubmit = async () => {
      const result = await dispatch(login(formik.values));
      if(result.meta.requestStatus === "fulfilled"){
        router.replace('/')
      }
    }

    const validate = (values:ILoginFormValues) => {
      let errors:FormikErrors<ILoginFormValues> = {}

      if(!values.email){
        errors.email = 'Required'
      } else if(!validator.isEmail(values.email)){
        errors.email = 'Invalid email format'
      }
  
      if(!values.password) {
        errors.password = 'Required'
      }

      return errors
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
        validate: validate,
        validateOnChange: false,
    })

    useEffect(()=>{
        dispatch(userActions.clearError())
    },[])

    return(
        <S.Container> 
            <S.BackLink onClick={()=>router.back()}>
                <S.IconArrowSpan><FontAwesomeIcon icon={faAngleLeft}/></S.IconArrowSpan> 
                Go Back
            </S.BackLink>
            <S.Form onSubmit={formik.handleSubmit}>
                <S.Icon><FontAwesomeIcon icon={faKey}/></S.Icon>
                <S.Title>Login</S.Title>
                <S.FormControl>
                <S.Label htmlFor='email'>Email</S.Label>
                <S.TextInput 
                    id='email' 
                    name='email' 
                    type='email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    hasError={!!(formik.errors.email && formik.touched.email)}
                    />
                {formik.touched.email && formik.errors.email? <S.ErrorMessage>{formik.errors.email}</S.ErrorMessage>: null}
                </S.FormControl>
                <S.FormControl>
                <S.Label htmlFor='password'>Password</S.Label>
                <S.TextInput 
                    id='password' 
                    name='password' 
                    type='password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    hasError={!!(formik.errors.password && formik.touched.password)}
                    />
                    {formik.touched.password && formik.errors.password? <S.ErrorMessage>{formik.errors.password}</S.ErrorMessage>: null}
                </S.FormControl>
                <S.ErrorMessage>{useAppSelector(state=>state.user.error)}</S.ErrorMessage>
                <S.LoginBtn type="submit">Log in</S.LoginBtn>
                <S.SignupLink>Dont have an account? <Link href= "/signup">Sign Up</Link></S.SignupLink>
            </S.Form>
        </S.Container>
    )
}