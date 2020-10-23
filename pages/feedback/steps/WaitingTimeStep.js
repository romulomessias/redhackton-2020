import styled from "styled-components";

// components
import SquareButton from '../../../components/SquareButton'
import FormGrid from '../../../components/FormGrid'
import Title from '../../../components/Title'

// icons
import Schedule from "../../../public/icons/schedule.svg";

const SquareTitle = styled.h2`
  text-align: center;
`

const ScheduleSubtitle = styled.p`
  color: gray;
`

export default function WaitingTimeStep({ setStep, onSelect }) {
  const measure = [
    {
      label: 'Curto',
      slug: 1,
      description: 'Zona vazio',
      subtitle: '15 min ou menos',
      level: 1
    },
    {
      label: 'Medio',
      slug: 1,
      description: 'Zona media',
      subtitle: '15 a 30 min',
      level: 2
    },
    {
      label: 'None',
      slug: 1,
      description: 'Zona None',
      level: 1
    },
    {
      label: 'Longo',
      slug: 1,
      description: 'Zona cheia',
      subtitle: '30 a 45 min',
      level: 3
    }
  ]

  return (
    <>
      <Title>Como está o tempo de espera das filas?</Title>
      <FormGrid>
        {measure.map((feedback, index) => (
          <SquareButton onClick={() => onSelect(feedback)} key={index}>
            <Schedule width="45px" height="45px" />
          <ScheduleSubtitle>{feedback.subtitle}</ScheduleSubtitle>
            <SquareTitle>{feedback.label}</SquareTitle>
          </SquareButton>
        ))}
      </FormGrid>
    </>
  );
}
