import styled from "styled-components";

export const Container = styled.div`
  margin: 1.5rem;
  padding: 1rem;

  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.surface};
`;
export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.tertiary};
  font-weight: 600;
`;

export const RoadMapLink = styled.a`
  font-weight: 600;
  text-decoration: underline;
  color: ${(props) => props.theme.interactive.active};
`;
