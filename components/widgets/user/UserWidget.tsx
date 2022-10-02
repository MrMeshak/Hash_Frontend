import Router, { useRouter } from 'next/router';
import * as React from 'react';
import { axiosAuth } from '../../../services/authApi';
import { selectUser, useAppSelector } from '../../../store/hooks';
import * as S from './UserWidget.styles'


export interface IUserWidgetProps {
}



export default function UserWidget (props: IUserWidgetProps) {
  const router = useRouter()

  const handleLogoutBtn = () => {
    axiosAuth.get('/logout')
      .then((res)=>{
        router.replace("/")
      })
  }
  const user = useAppSelector(selectUser())
  return (
    <S.Container>
        <S.ProfileImg></S.ProfileImg>
        <S.Name>{user.firstname} {user.lastname}</S.Name>
        <S.LogoutBtn onClick={handleLogoutBtn}>Logout</S.LogoutBtn>
    </S.Container>
  );
}
