import axios from 'axios';
import { IUser } from '../store/user/userModel';

export const axiosAuth = axios.create({
  baseURL: 'hashbackend-production.up.railway.app/auth',
  timeout: 8000,
  withCredentials: true
});

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginRes {
  authToken: string;
  user: IUser;
}

export interface ISignupRes {
  authToken: string;
  user: IUser;
}

export interface ISignup {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}
