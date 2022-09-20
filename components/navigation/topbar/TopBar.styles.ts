import styled from "styled-components";

export const Container = styled.div`
  height: 5rem;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 6;

  background: radial-gradient(
      circle at top left,
      ${(props) => props.theme.colors.secondaryAccent} -20%,
      transparent 30%
    ),
    radial-gradient(
      at bottom left,
      ${(props) => props.theme.colors.secondaryAccent} -20%,
      transparent 30%
    ),
    radial-gradient(
      at bottom,
      ${(props) => props.theme.colors.secondaryAccent} -80%,
      transparent 40%
    ),
    linear-gradient(
      15deg,
      ${(props) => props.theme.colors.secondary},
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.tertiaryAccent}
    );
`;

export const Title = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 1rem;
`;
export const Subtitle = styled.h2`
  color: white;
  font-size: 0.9rem;
  font-weight: 400;
  opacity: 70%;
`;

export const MenuBtn = styled.button`
  padding: 0rem;
  width: 2rem;
  color: white;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.6rem;
`;
