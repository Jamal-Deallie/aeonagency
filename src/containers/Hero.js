import React, { useEffect, useRef } from 'react';
import { Navigation } from '../components';
import { Button } from '../components';
import styled from 'styled-components';
import gsap from 'gsap';
import SplitText from '../utils/Split3.min';

export default function HeroContainer() {
  useEffect(() => {
    const split = new SplitText('#header-text', {
      type: 'lines',
      linesClass: 'lineChildren',
    });

    const splitParent = new SplitText('#header-text', {
      type: 'lines',
      linesClass: 'lineParent',
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2',
    });
  }, []);

  const fadeRef = useRef();
  useEffect(() => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: 0.5,
      delay: 2,
      y: 0,
      ease: 'power4.easeIn',
      stagger: {
        amount: 0.5,
      },
    });
  });

  const imgRef = useRef();
  useEffect(() => {
    gsap.to(imgRef.current, {
      delay: 3,
      duration: 2,
      opacity: 1,
      y: 0,
      ease: 'elastic',
    });
  });

  return (
    <HeroSection>
      <Navigation />

      <Wrapper>
        <Container>
          <HeaderText id='header-text'>AEON AGENCY</HeaderText>
          <InnerContents ref={fadeRef}>
            <p>
              Go to the sky and out of space with your business. We have the
              best team to help you.
            </p>
            <HeroButton>Learn More</HeroButton>
          </InnerContents>
        </Container>
        <ImgWrapper>
          <Image src='/images/misc/astronaut.svg' ref={imgRef} />
        </ImgWrapper>
      </Wrapper>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: linear-gradient(
    to top,
    #fcc5e4 0%,
    #fda34b 15%,
    #ff7882 35%,
    #c8699e 52%,
    #7046aa 71%,
    #0c1db8 87%,
    #020f75 100%
  );
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1224px;
  padding: 5rem 0;
  gap: 20rem;
  & * {
    flex-basis: 100%;
  }
  @media (max-width: 80rem) {
    flex-direction: column-reverse;
  }
`;

const Container = styled.div`
  height: 70rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 5rem;
`;

const InnerContents = styled.div`
  transform: translateY(6rem);
  opacity: 0;
  & p {
    font-size: ${props => props.theme.font.size.heading5};
    width: clamp(300px, 30vw, 350px);
    line-height: 1.2;
    text-align: left;
    padding: 4rem 0;
  }
`;

const HeroButton = styled(Button)`
  background: ${props => props.theme.variant.quaternary};
`;

const HeaderText = styled.h1`
  font-family: ${props => props.theme.font.family.headerFont};
  color: ${props => props.theme.variant.primary};
  font-size: clamp(10rem, 15vw, 17rem);
  line-height: 1;
  & .lineParent {
    overflow: hidden;
  }
  & .lineChildren {
    transform: translate(0, 500px);
  }
`;

const Image = styled.img`
  height: 60vh;
  z-index: 1000;
  opacity: 0;
  transform: translateY(-6rem);
`;

const ImgWrapper = styled.div`
  height: 70rem;
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
