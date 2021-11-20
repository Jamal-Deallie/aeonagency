import React from "react";
import styled from "styled-components";
import { Slider } from "../components";
import { ClientData as Data } from "../shared/ClientData";

export default function ClientsContainer() {
  return (
    <ClientsSection>
      <Container>
        <Subheader>
          <img src="/images/stars/star_4.svg" />
          <p> Clients</p>
          <h3>We built our business.Now we're helping build yours. </h3>
          <p>
            Veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit
          </p>
        </Subheader>
        <Slider />
        <ClientList>
          {Data.map((d) => {
            return (
              <LogoWrapper key={d.id}>
                <img src={d.src} alt={d.alt} />
              </LogoWrapper>
            );
          })}
        </ClientList>
      </Container>
    </ClientsSection>
  );
}

const ClientsSection = styled.section`
  padding-top: 5rem;
  background: ${(props) => props.theme.variant.quaternary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-bottom: 5rem;
`;
const Container = styled.div`
  max-width: 1420px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Subheader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h3 {
    margin: 2.5rem 0;
    font-size: ${(props) => props.theme.font.size.heading4};
    width: 400px;
    text-align: center;
    color: white;
  }
  & img {
    height: 6rem;
  }
  & p:last-child {
    padding-bottom: 2.5rem;
    width: 600px;
    text-align: center;
  }
`;

const ClientList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-basis: auto;
  width: 70%;
`;

const LogoWrapper = styled.div`
  width: 17rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-of-type(8) {
    & img {
      height: 3rem;
    }
  }
  &:nth-of-type(7) {
    & img {
      height: 3rem;
    }
  }
  &:nth-of-type(10) {
    & img {
      height: 6rem;
    }
  }
  &:nth-of-type(2) {
    & img {
      height: 5rem;
    }
  }
  &:nth-of-type(1) {
    & img {
      height: 5rem;
    }
  }
  & img {
    height: 4rem;
  }
`;
