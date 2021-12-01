import React from 'react';
import { Accordion } from '../components';
import styled from 'styled-components';

export default function FaqsContainer() {
  return (
    <FaqSection data-scroll-section>
      <Subheader>
        <img src='/images/stars/star_12.svg' alt='' />
        <p>Questions</p>
        <h3>Find the answers here</h3>
        <p>
          Suspendisse faucibus sed dolor eget posuere. vbSed id interdum urna.
          Nam ac elit a ante commodo tristique w.
        </p>
      </Subheader>
      <Accordion />
    </FaqSection>
  );
}

const FaqSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 10rem;
`;

const Subheader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & img {
    height: 5rem;
  }
  & h3 {
    font-size: ${props => props.theme.font.size.heading4};
    width: 400px;
    text-align: center;
    color: ${props => props.theme.variant.primary};
    padding: 2.5rem 0;
    color: black;
  }
  & p {
    color: black;
  }
  & p:last-child {
    padding-bottom: 7.5rem;
  }
`;
