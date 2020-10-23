import { useState } from "react";
import styled from "styled-components";
import { Container } from "../../styles/pages/Index.styled";

import CrowdedLevelStep from './steps/CrowdedLevelStep'
import WaitingTimeStep from './steps/WaitingTimeStep'

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export default function LocationForm() {
  const [step, setStep] = useState('step1')
  // const dispatch = useDispatch()

  // const searchZone = () => {
  //   if (value) {
  //     dispatch({ type: 'SET_ZONE', zone: value })
  //   }
  // }

  return (
    <Container>
      <Main>
        {step === 'step1' && <CrowdedLevelStep setStep={setStep} />}
        {step === 'step2' && <WaitingTimeStep setStep={setStep} />}
      </Main>
    </Container>
  );
}
