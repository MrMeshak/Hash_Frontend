export interface IUser {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  profileImg: string;

  createdAt: Date | null;
  updatedAt: Date | null;
}

export interface IUserState {
  user: IUser;
  authToken: string;
  loggedIn: boolean;
  loading: boolean;
  error: string;
}
