import React from "react";
import styled from "styled-components";
import { Slider } from "../components";
import { ClientData as Data } from "../shared/ClientData";

export default function StoryContainer() {
  return (
    <StorySection>
      <Container>
        <Subheader>
          <img src="/images/stars/star_9.svg" />
          <p>Our Story</p>
          <h3>We built our business.Now we're helping build yours. </h3>
          <p>
            Eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. am ac elit a
            ante commodo tristique. Duis lacus urna, condimentum a vehicula a,
            hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Aliquam vulputate, tortor nec commodo ultricies, vitae viverra
            urna nulla sed turpis. Nullam lacinia faucibus risus. Aliquam
            vulputate, tortor nec commodo ultricies, vitae viverra urna nulla
            sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt
            id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Suspendisse faucibus sed dolor eget posuere.Sed id interdum urna.
            Nam ac elit a ante commodo tristique. Sed id interdum urna. Nam ac
            elit a ante commodo tristique. Duis lacus urna
          </p>
        </Subheader>
      </Container>
    </StorySection>
  );
}

const StorySection = styled.section`
  padding-top: 5rem;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-bottom: 5rem;
  color: ${(props)=> props.theme.variant.secondary};
`;

const Container = styled.div`
  max-width: 1420px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Subheader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h3 {
    margin: 2.5rem 0;
    font-size: ${(props) => props.theme.font.size.heading4};
    width: 400px;
    text-align: center;
  }
  & img {
    height: 6rem;
  }
  & p:last-child {
    padding-bottom: 2.5rem;
    width: 600px;
    text-align: center;
  }
`;
