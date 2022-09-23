import styled from "styled-components";
import { PrimaryBtn, TertiaryBtn } from "../../utility/button/button.styles";
import { DefaultTextArea, DefaultTextInput, ITextInputProps } from "../../utility/input/input.styles";

export const Form = styled.form`
  width: 100%;
  margin-top: 2rem;
  position: relative;
  padding: 1.5rem 1.5rem 0.5rem 1.5rem;
  display: inline-block;

  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 10px;
`
export const Title = styled.h3`
  margin-bottom: 1.3rem;
  color: ${(props) => props.theme.colors.tertiaryVarient};
  font-size: 1.1rem;
  font-weight: 700;
`

export const TextAreaInput = styled(DefaultTextArea)<ITextInputProps>`
  resize: none;
  margin: 0rem 0rem 0rem 0rem;
  width: 100%;
  height: 8rem;
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

export const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;

  font-weight: 400;
  font-size: 0.9rem;

  color: ${(props) => props.theme.colors.textGreyedOut};
`;

export const SubmitBtn = styled(PrimaryBtn)`
  width: 9rem;
`;

