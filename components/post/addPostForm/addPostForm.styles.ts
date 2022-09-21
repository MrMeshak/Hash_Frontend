import styled from "styled-components";
import {
  NavigationLink,
  PrimaryBtn,
  TertiaryBtn,
} from "../../utility/button/button.styles";
import { DefaultTextArea, DefaultTextInput, ITextInputProps } from "../../utility/input/input.styles";

export const Container = styled.div`
  padding: 1.5rem;
`;

export const BackLink = styled(NavigationLink)``;

export const Form = styled.form`
  width: 100%;
  margin-top: 3rem;
  position: relative;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  display: inline-block;

  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 10px;
`;

export const Icon = styled.div`
  width: 3rem;
  height: 3rem;
  position: absolute;

  top: -1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 1rem;
  background-color: grey;
  border-radius: 1.5rem;

  background: radial-gradient(
    at top right,
    ${(props) => props.theme.colors.tertiaryAccent},
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );
`;

export const Title = styled.div`
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.tertiaryVarient};
  font-size: large;
  font-weight: 700;
`;

export const FormControl = styled.div`
  margin-bottom: 1rem;
`;

export const FormControlDropDown = styled.div`
  position: relative;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.tertiaryVarient};
  font-size: 0.9rem;
  font-weight: 700;
`;

export const Description = styled.p`
  margin-top: 0.5rem;
  color: ${(props) => props.theme.colors.paragraph};
  font-weight: 400;
  font-size: 0.9rem;
`;

export const TextInput = styled(DefaultTextInput)<ITextInputProps>`
  margin: 1rem 0rem 0rem 0rem;
  width: 100%;
  padding: 0.9rem 1rem;
  border: 1px solid
    ${(props) => (props.hasError ? props.theme.form.error : "transparent")};
  &:focus {
    border-color: ${(props) =>
      props.hasError ? props.theme.form.error : props.theme.form.active};
  }
`;

export const TextAreaInput = styled(DefaultTextArea)<ITextInputProps>`
  margin: 1rem 0rem 0rem 0rem;
  width: 100%;
  height: 10rem;
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

export const DropDownBtn = styled.button`
  width: 100%;
  margin: 1rem 0rem;
  padding: 0.9rem 1rem;
  display: flex;
  justify-content: space-between;
  border: none;
  border-radius: 5px;

  color: ${(props) => props.theme.form.defaultText};
  font-weight: 400;
  font-size: 0.9rem;
  font-family: "Jost";

  background-color: ${(props) => props.theme.form.default};
`;

export const Option = styled.option`
  background-color: ${(props) => props.theme.colors.surface};
`;

export const addPostBtn = styled(PrimaryBtn)`
  width: 100%;
  margin: 1rem 0rem;
  padding: 0.8rem 1rem;
`;
export const cancelBtn = styled(TertiaryBtn)`
  margin: 0rem 0rem;
`;

export const IconArrowSpan = styled.span`
  margin-right: 1rem;
  color: ${(props) => props.theme.colors.secondary};
`;

