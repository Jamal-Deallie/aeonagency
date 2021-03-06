import React from 'react';
import styled from 'styled-components';
import { FeatureData as Data } from '../../shared/FeatureData';

export default function Feature() {
  return (
    <FeatureSection>
      <Container>
        <Subheader>
          <img src='/images/stars/star_1.svg' />
          <p> Features</p>
          <h3>Doing the right thing at the right time </h3>
        </Subheader>
        <Contents>
          {Data.map(d => {
            return (
              <InnerContents key={d.id}>
                <img src={d.icon} />
                <h3>{d.subheader}</h3>
                <p>{d.details}</p>
              </InnerContents>
            );
          })}
        </Contents>
      </Container>
    </FeatureSection>
  );
}

const FeatureSection = styled.section`
  width: 100%;
  background: ${props => (props.tertiary ? '#ED738A' : '#5762cd')};
`;

const Container = styled.div`
  max-width: 1420px;
  padding: 0 20px;
  margin: 0 auto;
`;

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

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const InnerContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 375px;
  padding: 0 2rem;
  & img {
    height: 75px;
  }
  & p {
    text-align: center;
  }
  & h3 {
    margin: 2.5rem 0;
    color: white;
  }
`;
