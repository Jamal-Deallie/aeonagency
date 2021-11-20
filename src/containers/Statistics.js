import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import { StatisticData as Data } from "../shared/StatisticData";

export default function StatisticsContainer() {
  return (
    <StatsSection>
      <Wrapper>
        <img src="/images/stars/star_6.svg" alt="" />
        <h3>AEON by the Numbers</h3>
        <Subheader>
          Suspendisse faucibus sed dolor eget posuere sed id interdum urna. Nam
          ac elit a ante commodo tristiquehendrerit ac nisi Lorem ipsum dolor
        </Subheader>
        <StatContainer>
          {Data.map((d) => {
            return (
              <div key={d.id}>
                <Stat
                  start={0}
                  end={d.end}
                  duration={3}
                  delay={d.delay}
                  className="stats"
                />
                <Title>{d.subheader}</Title>
                <p>{d.desc}</p>
              </div>
            );
          })}
        </StatContainer>
      </Wrapper>
      <WorkersImage>
        <img src="/images/teammates/teammates.png" alt="Co-Workers of AEON" />
      </WorkersImage>
    </StatsSection>
  );
}

const StatsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
`;

const WorkersImage = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 66.66666666666667%;
  & img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

const Wrapper = styled.div`
  background: ${(props) => props.theme.variant.tertiary};
  padding: 0 12rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  & h3 {
    color: ${(props) => props.theme.variant.primary};
    font-size: ${(props) => props.theme.font.size.heading3};
  }
  & img {
    height: 3rem;
  }
`;

const StatContainer = styled.div`
  padding-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  width: 90%;
  grid-gap: 2.5rem;

  & p:last-of-type {
    font-size: ${(props) => props.theme.font.size.small};
  }
`;

const Subheader = styled.p`
padding-top: 2.5rem;
`;

const Title = styled.p`
padding: 1.5rem 0;
`;

const Stat = styled(CountUp)`
  font-size: ${(props) => props.theme.font.size.heading5};
  font-weight: 800;
`;