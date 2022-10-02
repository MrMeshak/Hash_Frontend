import styled from 'styled-components';
import { InteractiveBtn } from '../../utility/button/button.styles';

export const Container = styled.div`
  margin: 1.5rem;
  padding: 1.5rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.surface};

  @media ${(props) => props.theme.device.tablet} {
    margin: 0rem;
    margin-right: 1rem;
  }

  @media ${(props) => props.theme.device.laptop} {
    margin: 0rem;
    width: 100%;
  }
`;

export const ProfileImg = styled.img``;

export const Name = styled.h3`
  padding: 0rem;
`;

export const LogoutBtn = styled(InteractiveBtn)`
  padding: 0.4rem 1rem;
  margin-top: 1rem;
`;
