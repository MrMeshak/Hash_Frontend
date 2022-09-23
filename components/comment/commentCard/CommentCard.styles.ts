import styled from "styled-components";
import { InteractiveBtn, NavigationLinkBtn } from "../../utility/button/button.styles";

export const Container = styled.div`

`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Author = styled.div`
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 1rem;
  font-weight: 600;
`

export const ReplyBtn = styled(NavigationLinkBtn)`
  
  background-color: transparent;
  color: ${(props) => props.theme.interactive.headingHighlightText};
  
`

export const Content = styled.div`
  margin-top: 0.5rem;
  color: ${(props) => props.theme.colors.paragraph};
  font-weight: 400;
  font-size: 0.9rem;
`