import styled from 'styled-components';

interface IStatusColor {
  statusColor: string;
}

export const Container = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${(props) => props.theme.device.tablet} {
    border-radius: 10px;
  }
`;

export const IconStatusSpan = styled.span<IStatusColor>`
  margin-right: 1rem;
  font-size: 0.5rem;
  color: ${(props) => props.statusColor};
`;

export const Title = styled.h4`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.paragraph};
  font-weight: 400;
  font-size: large;
`;

export const Count = styled.h4`
  color: ${(props) => props.theme.colors.paragraph};
  font-size: 1.2rem;
  font-weight: 600;
`;
