import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Container } from "../styles/pages/zones.styled";
import { useLocation } from "../hooks/useLocation";
import styled from "styled-components";
import { getZones, getZonesStatus } from "../services/zones";
import Button from "../components/Button";

import Arrow from "../public/icons/arrow_back.svg";
import Refresh from "../public/icons/refresh.svg";
import Person from "../public/icons/person.svg";
import Schedule from "../public/icons/schedule.svg";
import { route } from "next/dist/next-server/server/router";

const Title = styled.h2`
  // height: 56px;
  margin: 0;
  margin-bottom: 16px;
  font-family: Avenir;
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 55px;
  text-align: center;
`;

const ZoneName = styled.div`
  width: 378.89px;
  color: #000000;
  // font-family: Roboto;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 28px;
  text-align: center;
  margin 0 auto;
`;

const ZoneStatusGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin-top: 60px;
  // margin-bottom: 210px;

  & > div {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 16px;
    justify-content: center;
  }
`;

const ZoneActionStatusLabel = styled.div`
  width: 382px;
  height: 112px;
  background-color: ${(props) => props.theme.colors.background[props.status]};
  color: #000000;
  margin: auto;
  margin-bottom: 210px;
  margin-top: 16px;

  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  text-align: center;
`;

const ZoneActionIconGroup = styled.div`
  box-sizing: border-box;
  height: 152px;
  width: 183px;
  border: 1px solid ${(props) => props.theme.colors.border[props.status]};
  background-color: #f2f2f2;
  padding: 24px;

  & > svg {
    height: 32px;
    width: 32px;
  }
`;

const ZoneActionIconText = styled.div`
  width: 124px;
  color: #000000;
  // font-family: Roboto;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 28px;
`;

const ZoneAction = styled.div`
  padding: 8px;
  display: grid;
  grid-gap: 8px;
  grid-auto-flow: column;
`;

const Toolbal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

const ButtonIcon = styled.button`
  background: transparent;
  border: none;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 9px;
  align-items: center;
  padding: 8px;
`;
const ButtonIconText = styled.p`
  color: #000000;
  // font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 14px;
`;

const ActionButton = styled(Button)`
  box-sizing: border-box;
  height: 80px;
  border: 2px solid #0006ff;
  color: #0006ff;
`;

const ActionButtonLabel = styled.div`
  // width: 379px;
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 28px;
  text-align: center;
  padding: 16px;
`;

const StatusContainer = styled(Container)``;

const feedbackText = {
  ok: "É uma boa hora para fazer a diferença na sua cidade!",
  good: "Ótima hora para fazer a diferença na sua cidade!",
  bad: "Aglomeração intensa. Você pode votar nas próximas 5 horas.",
};

const feedbackLabel = {
  ok: "Pouca aglomeração",
  good: "Aglomeração média",
  bad: "Aglomeração intensa",
};

const feedbackLabelTime = {
  ok: "Tempo de espera curto",
  good: "Tempo de espera médio",
  bad: "Tempo de espera Alto",
};

const feedbackIndex = ["good", "ok", "bad"];

export default function Home() {
  const router = useRouter();
  const [zoneStatus, setStatus] = useState({});

  const { zone_status = 2, zone_name = "", zone_number = 0 } = zoneStatus;

  const status = feedbackIndex[zone_status];

  useEffect(() => {
    const number = localStorage.getItem("currentZone");
    // getZonesStatus(number).then((res) => {
    //   setStatus({
    //     zone_id: 905,
    //     zone_name: "EMEI. DONA LEONOR MENDES DE BARROS",
    //     zone_number: 12,
    //     zone_address: "RUA RUI FERREIRA DA ROCHA, 161",
    //     zone_city: "PARAGUA�U PAULISTA",
    //     zone_lat: -22.4135,
    //     zone_long: -50.5705,
    //     zone_status: 0,
    //     created_at: "2020-10-23T21:55:54.000Z",
    //     updated_at: null,
    //   });
    // });

    setStatus({
      zone_id: 905,
      zone_name: "EMEI. DONA LEONOR MENDES DE BARROS",
      zone_number: 12,
      zone_address: "RUA RUI FERREIRA DA ROCHA, 161",
      zone_city: "PARAGUA�U PAULISTA",
      zone_lat: -22.4135,
      zone_long: -50.5705,
      zone_status: 0,
      created_at: "2020-10-23T21:55:54.000Z",
      updated_at: null,
    });
  }, []);

  const handleBackButton = () => {
    router.push("/");
  };

  const handleUpdateButton = () => {
    setStatus({
      zone_id: 905,
      zone_name: "EMEI. DONA LEONOR MENDES DE BARROS",
      zone_number: 12,
      zone_address: "RUA RUI FERREIRA DA ROCHA, 161",
      zone_city: "PARAGUA�U PAULISTA",
      zone_lat: -22.4135,
      zone_long: -50.5705,
      zone_status: 2,
      created_at: "2020-10-23T21:55:54.000Z",
      updated_at: null,
    });
  }

  return (
    <Fragment>
      <Head>
        <title>Situação atual da sona eleitoral </title>
      </Head>
      <StatusContainer>
        <Toolbal>
          <ButtonIcon onClick={handleBackButton}>
            <Arrow />
          </ButtonIcon>

          <ButtonIcon>
            <ButtonIconText>Atualizar</ButtonIconText>
            <Refresh />
          </ButtonIcon>
        </Toolbal>

        <Title>Situação da sua zona</Title>
        <ZoneName>
          Zona {zone_number} - {zone_name}
        </ZoneName>

        <ZoneStatusGroup>
          <div>
            <ZoneActionIconGroup status={status}>
              <Person />
              <ZoneActionIconText>{feedbackLabel[status]}</ZoneActionIconText>
            </ZoneActionIconGroup>
            <ZoneActionIconGroup status={status}>
              <Schedule />
              <ZoneActionIconText>
                {feedbackLabelTime[status]}
              </ZoneActionIconText>
            </ZoneActionIconGroup>
          </div>
        </ZoneStatusGroup>

        <ZoneActionStatusLabel status={status}>
          {feedbackText["ok"]}
        </ZoneActionStatusLabel>

        <ActionButtonLabel>
          As informações acima estão corretas?
        </ActionButtonLabel>
        <ZoneAction>
          <ActionButton>SIM</ActionButton>
          <ActionButton>Não</ActionButton>
        </ZoneAction>
      </StatusContainer>
    </Fragment>
  );
}
