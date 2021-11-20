import React from "react";
import styled from "styled-components";
import { Video } from "../components";
import { Button } from "../components";

export default function MissionContainer() {
  return (
      <MissionSection>
        <Video className="video" />
        <Container>
          <Subheader>
            <img src="/images/stars/star_2.svg" />
            <p> Our Company Mission</p>
            <h3>A different type of help to grow up business </h3>
          </Subheader>
          <Contents>
            <p>
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
          </Contents>
          <Button>Learn More</Button>
        </Container>
      </MissionSection>
  );
}

const Container = styled.div`
  max-width: 1420px;
  padding: 0 20px;
  margin: 100px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subheader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h3 {
    margin-top: 2.5rem;
    margin-bottom: 7.5rem;
    font-size: ${(props) => props.theme.font.size.heading4};
    width: 400px;
    text-align: center;
  }
  & img {
    height: 5rem;
  }
  p {
    color: black;
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: black;
    width: 40vw;
    text-align: center;
    padding-bottom: 2.5rem;
  }
`;


const MissionSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
