import styled from "styled-components";

export interface VerticalLineProps{
  isLast: boolean;
}

export const Container = styled.div`
  display: flex;
`

export const VerticalLine = styled.div<VerticalLineProps>`
  height: ${(props) => props.isLast? "0.8rem" : "auto"};
  margin: 0rem 2rem 0rem 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.seperationLine};
  opacity: 25%;
`
export const ReplyContainer = styled.div`
  margin-bottom: 1rem;
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

export const Content = styled.div`
  margin-top: 0rem;
  color: ${(props) => props.theme.colors.paragraph};
  font-weight: 400;
  font-size: 0.9rem;
`