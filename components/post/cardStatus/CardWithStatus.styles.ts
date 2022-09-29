import styled from 'styled-components';
import { InteractiveBtn } from '../../utility/button/button.styles';
interface IStatusColor {
  statusColor: string;
}

export const Container = styled.div`
  margin-top: 1rem;
  padding: 0rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 10px;
`;

export const ColorAccent = styled.div<IStatusColor>`
  height: 6px;
  background-color: ${(props) => props.statusColor};
  border-radius: 10px 10px 0px 0px;
`;
export const StatusInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0rem;
  margin-bottom: -2.8rem;
  margin-left: 1.5rem;
`;
export const IconStatusSpan = styled.span<IStatusColor>`
  font-size: 0.5rem;
  color: ${(props) => props.statusColor};
`;

export const Status = styled.p`
  margin-left: 1rem;
  color: ${(props) => props.theme.colors.paragraph};
  font-weight: 400;
  font-size: 0.8rem;
`;

export interface IVoteCountBtn {
  active: boolean;
}

export const CardContainer = styled.div`
  margin-top: 1rem;
  padding: 1.5rem;

  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.surface};
`;

export const RoadMapBar = styled.div``;

export const CardColorAccent = styled.div`
  width: 110%;
  height: 0.5rem;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const Title = styled.a`
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Description = styled.p`
  margin-top: 0.5rem;
  color: ${(props) => props.theme.colors.paragraph};
  font-weight: 400;
  font-size: 0.9rem;
`;

export const Tag = styled.div`
  width: fit-content;
  padding: 0.4rem 1rem;
  margin-top: 0.5rem;

  border-radius: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  color: ${(props) => props.theme.interactive.headingHighlightText};
  background-color: ${(props) => props.theme.interactive.default};
`;

export const PostInfoContainer = styled.div`
  margin-top: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const VoteCountBtn = styled(InteractiveBtn)<IVoteCountBtn>`
  padding: 0.4rem 1rem;
  color: ${(props) => (props.active ? props.theme.interactive.activeText : props.theme.interactive.headingText)};
  background-color: ${(props) => (props.active ? props.theme.button.secondary : props.theme.interactive.default)};

  &:hover {
    color: ${(props) => (props.active ? props.theme.interactive.activeText : props.theme.interactive.headingText)};
    background-color: ${(props) => (props.active ? props.theme.interactive.active : props.theme.interactive.hover)};
  }
  &:hover > span {
    color: ${(props) => (props.active ? props.theme.interactive.activeText : props.theme.interactive.headingText)};
  }
`;

export const CommentCount = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Jost';
  font-weight: 700;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.tertiary};
`;
export const IconVoteSpan = styled.span<IVoteCountBtn>`
  margin-right: 0.5rem;
  color: ${(props) => (props.active ? props.theme.interactive.activeText : props.theme.colors.secondary)};
`;
export const IconCommmentSpan = styled.span`
  margin-right: 0.5rem;

  color: #cdd2ee;
  font-size: 1.2rem;
`;
