import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  margin: 1.5rem;
`;
export const LibraryContainer = styled.div`
  margin: -1.5rem;
`;

export const LibraryInfoContainer = styled.div`
  margin: 2rem 1.5rem 1rem 1.5rem;
`;

export const LibraryTitle = styled.h3`
  color: ${(props) => props.theme.colors.tertiary};
  font-weight: 600;
`;

export const LibraryDescription = styled.p`
  color: ${(props) => props.theme.colors.paragraph};
  font-weight: 400;
`;
