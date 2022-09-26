import styled from "styled-components";
import { NavigationLink, SecondaryBtn } from "../../utility/button/button.styles";

export const Container = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.surface};
`

export const Title = styled.h3`
  margin-bottom: 1.3rem;
  color: ${(props) => props.theme.colors.tertiaryVarient};
  font-size: 1.1rem;
  font-weight: 700;
`

