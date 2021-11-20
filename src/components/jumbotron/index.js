import React from "react";
import styled from "styled-components";
import Navigation from "../navigation/index";

export default function Jumbotron({ title, subheader }) {
  return (
    <JumbotronSection>
      <Navigation />
      <Container>
        <h5>{title}</h5>
        <h1>{subheader}</h1>
      </Container>
    </JumbotronSection>
  );
}

const JumbotronSection = styled.div`
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

  height: 60vh;
  padding-bottom: 10rem;
  & h1 {
    font-size: clamp(10rem, 6vw, 22rem);
    line-height: 1;
    color: ${(props) => props.theme.variant.primary};
  }
  & h5 {
    font-size: ${(props) => props.theme.font.size.large};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
`;
