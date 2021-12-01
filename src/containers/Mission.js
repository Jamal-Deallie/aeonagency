import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../components';

import useOnScreen from '../hooks/useOnScreen';
import cn from 'classnames';
import gsap from 'gsap';

export default function MissionContainer() {
  const [reveal, setReveal] = useState(false);
  const sectionRef = useRef();
  const onScreen = useOnScreen(sectionRef);

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
  }, [reveal]);
  return (
    <MissionSection data-scroll-section>
      {/*  */}
      <Container ref={sectionRef} className={cn({ 'is-reveal': reveal })}>
        <Contents column={true}>
          <Subheader>
            <img src='/images/stars/star_2.svg' />
            <p> Our Company Mission</p>
            <h3>A different type of help to grow up business </h3>
          </Subheader>

          <p>
            Eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem.
          </p>
          <StyledButton>Learn More</StyledButton>
        </Contents>
        <VideoWrapper>
          <VideoPlayer src='/videos/video.mp4'  controls />
        </VideoWrapper>
      </Container>
    </MissionSection>
  );
}
const MissionSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: ${props => props.theme.variant.quinary};
  @media (max-width: 80rem) {
    padding: 10rem;
  }
`;
const Container = styled.div`
  transform: translateY(6rem);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
  opacity: 0;

  & .is-reveal {
    opacity: 1;
  }
  @media (max-width: 80rem) {
    flex-direction: column;
    gap: 8rem;
  }
`;
const Contents = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  align-items: center;
  width: 50vw;
  grid-column: 1 / span 4;


  p {
    color: ${props => props.theme.variant.primary};
    text-align: center;
    width: 70ch;
  }
`;
const Subheader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h3 {
    font-size: ${props => props.theme.font.size.heading4};
    width: 400px;
    text-align: center;
    color: ${props => props.theme.variant.primary};
    padding: 2.5rem 0;
  }
  & img {
    height: 5rem;
  }
`;

const StyledButton = styled(Button)`
  background-color: transparent;
  margin-top: 5rem;
  border: solid 0.2rem #fec820;
  color: ${props => props.theme.variant.primary};
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #fec820;
  }
`;

const VideoWrapper = styled.div`

`;

const VideoPlayer = styled.video`
width: 40vw;
float: left;


`;
