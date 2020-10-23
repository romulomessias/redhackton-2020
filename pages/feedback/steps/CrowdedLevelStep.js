import styled from "styled-components";

// components
import SquareButton from '../../../components/SquareButton'
import Title from '../../../components/Title'
import FormGrid from '../../../components/FormGrid'

// icons
import People from "../../../public/icons/people.svg";
import Person from "../../../public/icons/person.svg";
import Groups from "../../../public/icons/groups.svg";

const SquareTitle = styled.h2`
  text-align: center;
`

export default function CrowdedLevelStep({ setStep, onSelect }) {
  const measure = [
    {
      label: 'Baixo',
      slug: 0,
      description: 'Zona vazio',
      level: 1
    },
    {
      label: 'Medio',
      slug: 0,
      description: 'Zona media',
      level: 2
    },
    {
      label: 'None',
      slug: 0,
      description: 'Zona None',
      level: 1
    },
    {
      label: 'Alto',
      slug: 0,
      description: 'Zona cheia',
      level: 3
    }
  ]

  return (
    <>
      <Title>Como está o nível de aglomeração agora?</Title>
      <FormGrid>
        {measure.map((feedback, index) => (
          <SquareButton onClick={() => onSelect(feedback)} key={index}>
            {feedback.level === 1 && <Person width="45px" height="45px" />}
            {feedback.level === 2 && <People width="45px" height="45px" />}
            {feedback.level === 3 && <Groups width="45px" height="45px" />}
            <SquareTitle>{feedback.label}</SquareTitle>
          </SquareButton>
        ))}
      </FormGrid>
    </>
  );
}
