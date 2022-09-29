import styled from 'styled-components';

export const Container = styled.div`
  margin: 1.5rem;
  padding: 1.5rem;

  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.surface};

  @media ${(props) => props.theme.device.tablet} {
    margin: 0;
    width: 30rem;
  }
  @media ${(props) => props.theme.device.laptop} {
    margin: 0;
    width: 15rem;
  }
`;
export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
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
