import styled from "styled-components";

interface IOptionProps {
  isTop: boolean;
  isBottom: boolean;
  isSelected: boolean;
}

export const Option = styled.button<IOptionProps>`
  width: 100%;
  margin: 0rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${(props) =>
    props.isSelected
      ? props.theme.button.primary
      : props.theme.interactive.textOnLight};
  background-color: ${(props) => props.theme.colors.surface};
  font-size: small;
  cursor: pointer;

  border: none;
  border-radius: ${(props) => {
    if (props.isTop) {
      return "10px 10px 0px 0px";
    }
    if (props.isBottom) {
      return "0px 0px 10px 10px";
    }
    return "0px 0px 0px 0px";
  }};
  border-bottom: ${(props) =>
    props.isBottom ? `none` : `solid 1px lightgray`};
`;
export const IconSpan = styled.span`
  margin-left: 1rem;
  padding: 0rem 0.5rem;
  color: ${(props) => props.theme.button.primary};
`;
