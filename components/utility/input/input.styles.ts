import styled from "styled-components";

export const DefaultTextInput = styled.input`
  color: ${(props) => props.theme.form.defaultText};
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.form.default};
  outline: none;
  &:focus {
    border: 1px solid ${(props) => props.theme.form.active};
  }
`;
