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
  font-size: 1.3rem;
  font-weight: 700;
`

export const Line = styled.hr`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.seperationLine};
  opacity: 25%;
`