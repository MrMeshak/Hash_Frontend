import styled from "styled-components";

export const PrimaryBtn = styled.button`
  width: 100%;
  margin: 1rem 0rem;
  padding: 0.8rem 1rem;
  color: ${(props) => props.theme.button.textOnDark};
  background-color: ${(props) => props.theme.button.primary};
  font-weight: 700;
  font-size: 0.9rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.button.primaryHover};
  }
`;

export const SecondaryBtn = styled.button`
  width: 100%;
  margin: 1rem 0rem;
  padding: 0.8rem 1rem;
  color: ${(props) => props.theme.button.textOnDark};
  background-color: ${(props) => props.theme.button.secondary};
  font-weight: 700;
  font-size: 0.9rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.button.secondaryHover};
  }
`;
export const TertiaryBtn = styled.button`
  width: 100%;
  margin: 1rem 0rem;
  padding: 0.8rem 1rem;
  color: ${(props) => props.theme.button.textOnDark};
  background-color: ${(props) => props.theme.button.tertiary};
  font-weight: 700;
  font-size: 0.9rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.button.tertiaryHover};
  }
`;

export const NavigationLinkBtn = styled.button`
  color: ${(props) => props.theme.button.textOnDark};
  background-color: ${(props) => props.theme.button.tertiary};
  font-weight: 700;
  font-size: 0.9rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const NavigationLink = styled.a`
  color: ${(props) => props.theme.button.textOnTransparent};
  font-weight: 700;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const DropDownBtn = styled.button`
  background-color: ${(props) => props.theme.form.default};
`;

export const InteractiveBtn = styled.button`
  font-family: "Jost";
  font-weight: 700;
  font-size: 0.9rem;
  color: ${(props) => props.theme.interactive.headingText};
  background-color: ${(props) => props.theme.interactive.default};
  border-radius: 10px;
  cursor: pointer;

  border: none;
  &:hover {
    background-color: ${(props) => props.theme.interactive.hover};
  }
`;

export const interactiveLink = styled.a``;
