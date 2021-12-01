import React from 'react';
import styled from 'styled-components';
import { ServiceData as Data } from '../shared/ServiceData';

export default function ServicesContainer() {
  return (
    <ServicesSection>
      <Container>
        <Subheader>
          <img src='/images/stars/star_14.svg' alt='' />
          <p> Services</p>
          <h3>Am ac elit a ante commodo tristique </h3>
          <p>
            Suspendisse faucibus sed dolor eget posuere. vbSed id interdum urna.
            Nam ac elit a ante commodo tristique w.
          </p>
        </Subheader>
        <FlexContainer>
          {Data.map(d => {
            return (
              <Wrapper key={d.id}>
                <img src={d.icon} alt={d.title} />
                <p>{d.title}</p>
              </Wrapper>
            );
          })}
        </FlexContainer>
      </Container>
    </ServicesSection>
  );
}

const ServicesSection = styled.section`
  background: ${props => props.theme.variant.quinary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10rem;
`;

const Container = styled.div`
  padding-top: 7.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1240px;
`;

const Subheader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h3 {
    font-size: ${props => props.theme.font.size.heading4};
    width: 300px;
    text-align: center;
    color: white;
  }
  & img {
    height: 5rem;
  }
  & p:last-child {
    padding: 2.5rem 0 7.5rem 0;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 17.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  & img {
    height: 12rem;
    padding-bottom: 2.5rem;
  }
`;
