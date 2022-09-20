import * as React from 'react';
import { selectUser, useAppSelector } from '../../../store/hooks';
import * as S from './UserWidget.styles'


export interface IUserWidgetProps {
}

export default function UserWidget (props: IUserWidgetProps) {
  const user = useAppSelector(selectUser())
  return (
    <S.Container>
        <S.ProfileImg></S.ProfileImg>
        <S.Name>{user.firstname} {user.lastname}</S.Name>
        <S.LogoutBtn>Logout</S.LogoutBtn>
    </S.Container>
  );
}
