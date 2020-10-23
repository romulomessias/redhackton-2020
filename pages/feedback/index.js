import { useState } from "react";
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import styled from "styled-components";
import { Container } from "../../styles/pages/Index.styled";

// steps
import CrowdedLevelStep from './steps/CrowdedLevelStep'
import WaitingTimeStep from './steps/WaitingTimeStep'

// services
import { sendFeedback } from '../../services/feedback'

// store
import { useStore } from '../../stores/store'

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px 0;
`

export default function LocationForm() {
  const router = useRouter()
  const [step, setStep] = useState('step1')
  const store = useStore()

  const [mutate, { status, data, error }] = useMutation(sendFeedback)

  const onSelect = async (feedback) => {
    try {
      const zone = localStorage.getItem('zone')

      const payload = {
        zone,
        description: feedback.description,
        level: feedback.level.toString(),
        type: feedback.slug.toString()
      }

      console.log("payload", payload)

      const data = await sendFeedback(payload)
      // const data = await mutate(payload)
      console.log("return from backend", data)

      if (step === 'step1') {
        setStep('step2')
      }

      if (step === 'step2') {
        router.push('/finish')
      }
    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <Container>
      <Main>
        {step === 'step1' && <CrowdedLevelStep onSelect={onSelect} setStep={setStep} />}
        {step === 'step2' && <WaitingTimeStep onSelect={onSelect} setStep={setStep} />}
      </Main>
    </Container>
  );
}
