import styled from 'styled-components';

export const Container = styled.div`
  @media ${(props) => props.theme.device.laptop} {
    display: flex;
    justify-content: center;
    margin: 3rem 7%;
  }
`;

export const LibraryContainer = styled.div`
  @media ${(props) => props.theme.device.laptop} {
    margin-top: 1.5rem;
  }
`;
