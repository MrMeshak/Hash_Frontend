import styled from "styled-components";
import { NavigationLink, PrimaryBtn } from "../../utility/button/button.styles";

export const Container = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props=>props.theme.colors.tertiary};
`

export const BackLink = styled(NavigationLink)`
  color: ${(props) => props.theme.colors.textOnDark};
`
export const IconArrowSpan = styled.span`
  margin-right: 1rem;
  color: ${(props) => props.theme.colors.textOnDark};
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.textOnDark};
  font-size: 1.5rem;
  font-weight: 600;
`

export const AddFeedbackBtn = styled(PrimaryBtn)`
    width: 10rem;
    padding: 0.7rem 0rem;
`