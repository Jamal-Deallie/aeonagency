import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FeatureData as Data } from '../shared/FeatureData';
import useOnScreen from '../hooks/useOnScreen';
import cn from 'classnames';
import gsap from 'gsap';

export default function FeatureContainer() {
  const [reveal, setReveal] = useState(false);
  const sectionRef = useRef();
  const onScreen = useOnScreen(sectionRef);
  let sections = gsap.utils.toArray('.feature_item');

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      gsap.to(sectionRef.current, {
        opacity: 1,
        duration: 2,
        y: 0,
        ease: 'power3.easeIn',
      });
    }
    gsap.to(sections, {
      opacity: 1,
      duration: 3,
      stagger: 0.3,
      ease: 'power4.easeIn',
      y: 0,
    });
  }, [reveal, sections]);

  return (
    <FeatureSection>
      <Container ref={sectionRef} className={cn({ 'is-reveal': reveal })}>
        <Subheader data-scroll-section>
          <img src='/images/stars/star_1.svg' alt='' />
          <p> Features</p>
          <h3>Doing the right thing at the right time </h3>
        </Subheader>
        <Contents className={cn({ 'is-reveal': reveal })}>
          {Data.map(d => {
            return (
              <InnerContents
                key={d.id}
                className={cn('feature_item', { 'is-reveal': reveal })}>
                <img src={d.icon} alt={d.subheader} />
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
  background: ${props => props.theme.variant.tertiary};
  padding: 10rem;
`;

const Container = styled.div`
  transform: translateY(3rem);
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & .is-reveal {
    opacity: 1;
  }
`;

const Subheader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* opacity: 0;
  & .is-reveal {
    opacity: 1;
  } */
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
  justify-content: center;
  align-items: center;
  gap: 9rem;
  padding: 0 5rem;
  & div {
    flex-basis: 33%;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 7rem;
  }
`;

const InnerContents = styled.div`
  transform: translateY(3rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  /* & .is-reveal {
    opacity: 1;
  } */
  & img {
    height: 75px;
  }
  & p {
    text-align: center;
    width: 30ch;
  }
  & h3 {
    margin: 2.5rem 0;
    color: white;
  }
`;
