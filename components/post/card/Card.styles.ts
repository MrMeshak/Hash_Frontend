import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { InteractiveBtn } from "../../utility/button/button.styles";

export interface IVoteCountBtn {
  active: boolean;
}

export const Container = styled.div`
  margin-top: 1rem;
  padding: 1.5rem;

  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.surface};
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 0.9rem;
  font-weight: 600;
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

export const PostInforContainer = styled.div`
  margin-top: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const VoteCountBtn = styled(InteractiveBtn)<IVoteCountBtn>`
  padding: 0.4rem 1rem;
  color: ${(props) =>
    props.active
      ? props.theme.interactive.activeText
      : props.theme.interactive.headingText};
  background-color: ${(props) =>
    props.active
      ? props.theme.button.secondary
      : props.theme.interactive.default};

  &:hover {
    color: ${(props) => props.active? props.theme.interactive.activeText : props.theme.interactive.headingText};
    background-color: ${(props) => props.active? props.theme.interactive.active : props.theme.interactive.hover};
  }
  &:hover > span {
    color: ${(props) => props.active? props.theme.interactive.activeText :props.theme.interactive.headingText};
  }
`;

export const CommentCount = styled.div`
  display: flex;
  align-items: center;
  font-family: "Jost";
  font-weight: 700;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.tertiary};
`;
export const IconVoteSpan = styled.span<IVoteCountBtn>`
  margin-right: 0.5rem;
  color: ${(props) => props.active? props.theme.interactive.activeText : props.theme.colors.secondary};
`;
export const IconCommmentSpan = styled.span`
  margin-right: 0.5rem;

  color: #cdd2ee;
  font-size: 1.2rem;
`;
