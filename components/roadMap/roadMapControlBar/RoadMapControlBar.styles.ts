import styled from "styled-components";

export interface IControlBarSelectBtn{
  isSelected: boolean;
}

export interface IControlBarContainer{
  numberOfOptions: number
}

export const Container = styled.div<IControlBarContainer>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${props=>props.numberOfOptions}, 1fr);
  grid-template-rows: 1fr;
`

export const SelectBtn = styled.button<IControlBarSelectBtn>`
display: inline-block;
  width: 100%;
  height: 5rem;
  font-size: 0.9rem;
  font-weight: 600;
  flex-basis: 100%;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.headings};
  background-color: ${props=>props.theme.colors.background};
  box-shadow: ${props => props.isSelected? `inset 0 -5px ${props.theme.colors.primary}`:`inset 0 -2px rgba(58, 67, 116, 0.25)` };
  opacity: ${props => props.isSelected? '100%':'25%'}
`

