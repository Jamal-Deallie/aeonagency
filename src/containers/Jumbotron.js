import React, { useEffect } from "react";
import { Navigation } from "../components";
import { Button } from "../components";
import styled from "styled-components";
import gsap from "gsap";
import SplitText from "../utils/Split3.min";

export default function JumbotronContainer() {
  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  return (
    <Container>
      <Navigation />
      <InnerContents>
        <img src="/images/misc/astronaut.svg" />
        <HeaderText id="header-text">AEON AGENCY</HeaderText>
        <p>
          Go to the sky and out of space with your business. We have the best
          team to help you.
        </p>
        <Button>Learn More</Button>
      </InnerContents>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0 0 100px 0;
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
  & h1 {
    font-family: ${(props) => props.theme.font.family.headerFont};
    color: ${(props) => props.theme.variant.primary};
    font-size: clamp(10rem, 19vw, 22rem);
    line-height: 1;
  }
  & p {
    padding: 20px 0;
    font-size: ${(props) => props.theme.font.size.heading5};
    width: clamp(250px, 24vw, 350px);
    line-height: 1.2;
    text-align: center;
  }
`;
const InnerContents = styled.section`
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & img {
    position: absolute;
    height: 25vh;
  }
`;

const HeaderText = styled.h1`
  text-align: center;
  font-family: ${(props) => props.theme.font.family.headerFont};
  color: ${(props) => props.theme.variant.primary};
  font-size: clamp(10rem, 19vw, 22rem);
  line-height: 1;
  & .lineParent {
    overflow: hidden;
  }
  & .lineChildren {
    transform: translate(0, 500px);
  }
`;
