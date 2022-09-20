import * as S from './RoadMapWidget.styles'

export interface IRoadMapWidgetProps {
}

export default function RoadMapWidget (props: IRoadMapWidgetProps) {
  return (
    <S.Container>
      <S.TitleSection>
        <S.Title>Roadmap</S.Title>
        <S.RoadMapLink>View</S.RoadMapLink>
      </S.TitleSection>
      
    </S.Container>
  );
}
