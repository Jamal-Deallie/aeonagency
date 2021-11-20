import React from "react";
import styled from "styled-components";

export default function CEOContainer() {
  return (
    <CEOSection>
      <CEOImage>
        <img src="/images/teammates/ceo.png" alt="CEO of AEON" />
      </CEOImage>
      <Desc>
        <img src="/images/stars/star_3.svg" alt="" />
        <h3>Letter From The CEO of AEON</h3>
        <p>
          "Suspendisse faucibus sed dolor eget posuere sed id interdum urna. Nam
          ac elit a ante commodo tristiquehendrerit ac nisi Lorem ipsum dolor
          sit amet magna lacinia ultrices. Nam ac elit a ante commodo tristique
          hendrerit ac nisi Lorem ipsum dolor sit amet. Vestibulum imperdiet
          nibh vel magna lacinia ultrices sed id interdum urna hendrerit ac nisi
          lorem"
        </p>
        <p>First Name Last Name</p>
        <p>Title</p>
      </Desc>
    </CEOSection>
  );
}

const CEOSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
`;

const CEOImage = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 66.66666666666667%;
  & img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

const Desc = styled.div`
  background: ${(props) => props.theme.variant.quaternary};
  padding: 0 12rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  & h3 {
    color: ${(props) => props.theme.variant.primary};
    font-size: ${(props) => props.theme.font.size.heading3};
  }
  & p:first-of-type {
    padding: 2.5rem 0;
    font-style: italic;
  }
  & img {
    height: 3rem;
  }
`;
