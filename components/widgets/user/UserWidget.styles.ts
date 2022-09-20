import styled from "styled-components";
import { InteractiveBtn } from "../../utility/button/button.styles";

export const Container = styled.div`
  margin: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.surface};
`;

export const ProfileImg = styled.img``;

export const Name = styled.h3``;

export const LogoutBtn = styled(InteractiveBtn)`
  padding: 0.4rem 1rem;
  margin: 0.5rem 0.2rem;
`;
