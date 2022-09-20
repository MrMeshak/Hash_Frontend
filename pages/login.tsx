import * as React from 'react';
import LoginForm from '../components/loginSignup/login/LoginForm';

export interface ILoginProps {
}

export default function Login (props: ILoginProps) {
  return (
      <LoginForm/>
  );
}
