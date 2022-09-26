import React from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import * as S from './RoadMapBar.styles'

export interface IRoadMapBarProps {
}

export default function RoadMapBar (props: IRoadMapBarProps) {
  const router = useRouter();

  return (
    <S.Container>
      <div>
        <S.BackLink onClick={() => router.back()}>
          <S.IconArrowSpan><FontAwesomeIcon icon={faAngleLeft} /></S.IconArrowSpan>
          Go Back
        </S.BackLink>
        <S.Title>Roadmap</S.Title>
      </div>
      <S.AddFeedbackBtn>+ Add Feedback</S.AddFeedbackBtn>
    </S.Container>
  );
}
