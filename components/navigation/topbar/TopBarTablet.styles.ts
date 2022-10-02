import styled from 'styled-components';

export const Container = styled.div`
  margin: 1.5rem;
  display: none;

  @media ${(props) => props.theme.device.tablet} {
    display: flex;
  }
  @media ${(props) => props.theme.device.laptop} {
    width: 15rem;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
`;

export const TitleUserContainer = styled.div``;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  margin-right: 1rem;
  padding: 1.5rem;
  width: 100%;
  border-radius: 10px;

  background: radial-gradient(circle at top left, ${(props) => props.theme.colors.secondaryAccent} -20%, transparent 30%),
    radial-gradient(at bottom left, ${(props) => props.theme.colors.secondaryAccent} -20%, transparent 30%),
    radial-gradient(at bottom, ${(props) => props.theme.colors.secondaryAccent} -80%, transparent 40%),
    linear-gradient(15deg, ${(props) => props.theme.colors.secondary}, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.tertiaryAccent});
`;

export const Title = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 1.3rem;
`;
export const Subtitle = styled.h2`
  color: white;
  font-size: 1.1rem;
  font-weight: 400;
  opacity: 70%;
`;

export const WidgetContainer = styled.div`
  width: 10rem;
`;
