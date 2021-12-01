import React from 'react';
import styled from 'styled-components';
import { ServiceData as Data } from '../../shared/ServiceData';

export default function Services() {
  return (
    <ServicesSection>
      <Container>
        <Subheader>
          <img src='/images/stars/star_1.svg' alt='' />
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
`;

const Container = styled.div`
  padding-top: 7.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Subheader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h3 {
    margin: 2.5rem 0 7.5rem 0;
    font-size: ${props => props.theme.font.size.heading4};
    width: 300px;
    text-align: center;
    color: white;
  }
  & img {
    height: 5rem;
  }
`;

const FlexContainer = styled.div``;

const Wrapper = styled.div`
  & img {
    width: 1.5rem;
  }
`;
