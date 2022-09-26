import styled from "styled-components";
interface IStatusColor {
  statusColor: string;
}


export const Container = styled.div`
  margin-top: 1rem;
  padding: 0rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 10px;
`

export const ColorAccent = styled.div<IStatusColor>`
  height: 6px;
  background-color: ${props => props.statusColor};
  border-radius: 10px 10px 0px 0px ;
`
export const StatusInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0rem;
  margin-bottom: -2.8rem;
  margin-left: 1.5rem;
`
export const IconStatusSpan = styled.span<IStatusColor>`
  font-size: 0.5rem;
  color: ${props => props.statusColor};
`

export const Status = styled.p`
  margin-left: 1rem;
  color: ${(props) => props.theme.colors.paragraph};
  font-weight: 400;
  font-size: 0.8rem;
`