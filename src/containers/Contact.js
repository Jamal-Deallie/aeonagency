import React from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import { ContactForm } from "../components";

export default function ContactContainer() {
  return (
    <ContactSection>
      <Wrapper>
        <img src="/images/stars/star_6.svg" alt="" />
        <h3>Ready to Lift Off</h3>
        <Subheader>
          Suspendisse faucibus sed dolor eget posuere sed id interdum urna. Nam
          ac elit a ante commodo tristiquehendrerit ac nisi Lorem ipsum dolor
        </Subheader>
        <ContactForm />
      </Wrapper>
      <LocationImage>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.6519560411316!2d-83.05095388460148!3d42.32862164507905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d3ae5b3f105%3A0x93f9d7c5418255ee!2s243%20W%20Congress%20St%2C%20Detroit%2C%20MI%2048226!5e0!3m2!1sen!2sus!4v1637219417117!5m2!1sen!2sus"
          // width="600"
          // height="450"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </LocationImage>
      <ContactDetails>
        {/* <img src="/images/stars/star_6.svg" alt="" /> */}
        <h3>Contact Us</h3>
        <div>
          <FaIcons.FaMapPin />
          <h3> Aeon Agency </h3>
          <li>Marquette Building</li>
          <li>243 W Congress St</li>
          <li>Detroit, MI 48226</li>
        </div>

        <div>
          <FaIcons.FaPhone />
          <p>313-882-1747</p>
        </div>
        <div>
          <FaIcons.FaTelegramPlane /> <p>inquires@aeon.com</p>
        </div>
      </ContactDetails>
    </ContactSection>
  );
}

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

`;

const LocationImage = styled.div`
  & iframe {
    width: 100vw;
    height: 40vh;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20rem;
  height: 30vh;
  background: ${(props) => props.theme.variant.tertiary};
`;
const Wrapper = styled.div`
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
  & img {
    height: 3rem;
  }
`;

const Subheader = styled.p`
  padding-top: 2.5rem;
`;
