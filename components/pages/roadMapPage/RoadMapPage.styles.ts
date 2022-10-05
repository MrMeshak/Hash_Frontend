import { produceWithPatches } from 'immer';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';
import styled from 'styled-components';

export const ContainerMobile = styled.div`
  @media ${(props) => props.theme.device.tablet} {
    display: none;
  }
`;

export const ContainerTablet = styled.div`
  max-width: 110rem;
  margin: auto;
  display: none;
  @media ${(props) => props.theme.device.tablet} {
    display: block;
  }
`;
