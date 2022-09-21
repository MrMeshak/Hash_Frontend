import styled from "styled-components";
import { InteractiveBtn } from "../../utility/button/button.styles";

export interface IFilterBtn{
  isSelected: boolean;
}

export const FilterBtn = styled(InteractiveBtn)<IFilterBtn>`
  padding: 0.4rem 1rem;
  margin: 0.5rem 0.2rem;
  color: ${(props) => props.isSelected? props.theme.interactive.activeText :props.theme.interactive.headingHighlightText};
  background-color: ${(props) => props.isSelected? props.theme.interactive.active : props.theme.interactive.default};

   &:hover {
    color: ${(props) => props.isSelected? props.theme.interactive.activeText : props.theme.interactive.headingText};
    background-color: ${(props) => props.isSelected? props.theme.interactive.active : props.theme.interactive.hover};
  }
`;
