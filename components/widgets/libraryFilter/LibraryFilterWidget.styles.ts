import styled from 'styled-components';
import { InteractiveBtn } from '../../utility/button/button.styles';

export const Container = styled.div`
  margin: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.surface};
  @media ${(props) => props.theme.device.tablet} {
    width: 30rem;
    margin: 0rem;
    margin-right: 1rem;
  }
  @media ${(props) => props.theme.device.laptop} {
    margin: 0;
    width: 15rem;
  }
`;

export const FilterBtn = styled(InteractiveBtn)`
  padding: 0.4rem 1rem;
  margin: 0.5rem 0.2rem;
  color: ${(props) => props.theme.interactive.headingHighlightText};
`;
