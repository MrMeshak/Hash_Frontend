import styled from "styled-components";
import { PrimaryBtn } from "../../utility/button/button.styles";
import { DefaultTextArea, ITextInputProps } from "../../utility/input/input.styles";

export const Form = styled.form`
  margin-top: 2rem;


`
export const TextAreaInput = styled(DefaultTextArea)<ITextInputProps>`
  resize: none;
  margin: 0rem 0rem 0rem 0rem;
  width: 100%;
  height: 5rem;
  padding: 0.9rem 1rem;
  border: 1px solid 
    ${(props) => props.hasError? props.theme.form.error: "transparent"};
  &:focus {
    border-color: ${(props) =>
      props.hasError ? props.theme.form.error : props.theme.form.active};
  }
`;

export const ErrorMessage = styled.div`
  color: ${(props) => props.theme.form.error};
  font-size: 0.8rem;
  font-weight: 400;
`;

export const AddReplyBtn = styled(PrimaryBtn)`
  width: fit-content;
  padding: 0.8rem 1.1rem;
`

export const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;

  font-weight: 400;
  font-size: 0.9rem;

  color: ${(props) => props.theme.colors.textGreyedOut};
`;
