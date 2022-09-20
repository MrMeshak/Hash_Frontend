
import {useEffect}from 'react';
import * as S from './SignupForm.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import {FormikErrors, useFormik} from 'formik'
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import validator from 'validator'
import { signup, userActions } from '../../../store/user/userSlice';

interface ISignupFormValues{
  email:string;
  password: string;
  firstname: string;
  lastname:string;
}

export interface ISignupFormProps {
}

export default function SignupForm (props: ISignupFormProps) {
    const router = useRouter();
    const dispatch = useAppDispatch();
    
    const initialValues: ISignupFormValues= {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    }

    const onSubmit = async () => {
      const result = await dispatch(signup(formik.values))
      if(result.meta.requestStatus === "fulfilled"){
        router.replace('/')
      }
    }

    const validate = (values:ISignupFormValues) => {
      let errors: FormikErrors<ISignupFormValues>= {}

    if(!values.firstname) {
      errors.firstname = 'Required'
    }

    if(!values.lastname) {
      errors.lastname = 'Required'
    }

    if(!values.email){
      errors.email = 'Required'
    } else if(!validator.isEmail(values.email)){
      errors.email = 'Invalid email format'
    }

    if(!values.password) {
      errors.password = 'Required'
    } else if(values.password.length < 8){
      errors.password = 'Password must be at least 8 characters'
    } else if(!validator.isStrongPassword(values.password)){
      errors.password = `Password must include at least one lowercase, uppercase, number and symbol`
    }
    console.log(errors)
    return errors
    }

    const formik = useFormik({
      initialValues: initialValues,
      onSubmit: onSubmit,
      validate: validate,
      validateOnChange: false
    })

    useEffect(()=>{dispatch(userActions.clearError())},[])

  return (
    <S.Container> 
        <S.BackLink onClick={()=>router.back()}>
            <S.IconArrowSpan><FontAwesomeIcon icon={faAngleLeft}/></S.IconArrowSpan> 
            Go Back
        </S.BackLink>
        <S.Form onSubmit={formik.handleSubmit}>
            <S.Icon><FontAwesomeIcon icon={faUser}/></S.Icon>
            <S.FormControl>
              <S.Title>Sign Up</S.Title>
              <S.Label htmlFor='firstname'>First Name</S.Label>
              <S.TextInput 
                id='firstname' 
                name='firstname' 
                type='text'
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                hasError={!!(formik.touched.firstname && formik.errors.firstname)}/>
              {formik.touched.firstname && formik.errors.firstname? <S.ErrorMessage>{formik.errors.firstname}</S.ErrorMessage>: null}
            </S.FormControl>
            <S.FormControl>
              <S.Label>Last Name</S.Label>
              <S.TextInput 
                id='lastname' 
                name='lastname' 
                type='text'
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                hasError={!!(formik.touched.lastname && formik.errors.lastname)}/>
                {formik.touched.lastname && formik.errors.lastname? <S.ErrorMessage>{formik.errors.lastname}</S.ErrorMessage>: null}
            </S.FormControl>
            <S.FormControl>
              <S.Label htmlFor='email'>Email</S.Label>
              <S.TextInput 
                id='email' 
                name='email' 
                type='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                hasError={!!(formik.touched.email && formik.errors.email)}/>
                {formik.touched.email && formik.errors.email? <S.ErrorMessage>{formik.errors.email}</S.ErrorMessage>: null}
            </S.FormControl>
            <S.FormControl>
              <S.Label htmlFor='password'>Password</S.Label>
              <S.TextInput 
                id='password' 
                name='password' 
                type='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                hasError={!!(formik.touched.password && formik.errors.password)}/>
                {formik.touched.password && formik.errors.password? <S.ErrorMessage>{formik.errors.password}</S.ErrorMessage>: null}
            </S.FormControl>
            <S.ErrorMessage>{useAppSelector((state)=> state.user.error)}</S.ErrorMessage>
            <S.LoginBtn type="submit">Sign Up</S.LoginBtn>
        </S.Form>
    </S.Container>
  );
}

