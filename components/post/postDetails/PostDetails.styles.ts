import styled from 'styled-components';
import { NavigationLink, SecondaryBtn } from '../../utility/button/button.styles';

export const Container = styled.div`
  padding: 1rem 1.5rem;
  max-width: 55rem;
  margin: auto;
`;
export const PostDetailsTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EditPostBtn = styled(SecondaryBtn)`
  width: 10rem;
`;

export const BackLink = styled(NavigationLink)`
  margin: 0.5rem 0rem;
`;

export const IconArrowSpan = styled.span`
  margin-right: 1rem;
  color: ${(props) => props.theme.colors.secondary};
`;
