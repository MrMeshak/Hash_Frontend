import styled from 'styled-components';

export const Container = styled.div`
  @media ${(props) => props.theme.device.laptop} {
    display: flex;
    justify-content: center;
    margin: auto;
  }
`;

export const LibraryContainer = styled.div`
  width: 100%;
  @media ${(props) => props.theme.device.laptop} {
    margin-top: 1.5rem;
    max-width: 60rem;
  }
`;
