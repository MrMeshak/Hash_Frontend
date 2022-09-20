import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0rem;
  height: fit-content;
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.surface};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
