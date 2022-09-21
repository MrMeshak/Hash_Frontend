import styled from "styled-components";



export interface ITextInputProps {
  hasError: boolean;
}

export const DefaultTextInput = styled.input`
  outline: none;

  color: ${(props) => props.theme.form.defaultText};
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.form.default};
  
  &:focus {
    border: 1px solid ${(props) => props.theme.form.active};
  }
`;

export const DefaultTextArea = styled.textarea`
  resize: vertical;
  outline: none;
  
  color: ${(props) => props.theme.form.defaultText};
  font-family: "Jost";
  font-size: 0.9rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.form.default};
`