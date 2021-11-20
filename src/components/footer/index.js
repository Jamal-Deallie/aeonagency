import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavData as Data } from "../../shared/NavData";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as ImIcons from "react-icons/im";

export default function Footer() {
  return (
    <FooterSection>
      <Container>
        <Address>
          <Logo src="/images/logos/aeon_logo.svg" />
          <h3> Aeon Agency </h3>
          <li> Wilson Square Building</li>
          <li> 2808 Wildrose Lane</li>
          <li>Detroit, MI 48224</li>
          <li> 313-882-1747</li>
          <li>inquires@aeon.com</li>
        </Address>
        <Border />
        <About>
          <h3>About</h3>
          ABOUT Scanfcode.com CODE WANTS TO BE SIMPLE is an initiative to help
          the upcoming programmers with the code. Scanfcode focuses on providing
          the most efficient code or snippets as the code wants to be simple. We
          will help programmers build up concepts in different programming
          languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript,
          PHP, Android, SQL and Algorithm.
        </About>
        <LinkContainer>
          <h3>Quick Links</h3>
          {Data.map((d) => {
            return (
              <li>
                <Links key={d.id} to={d.path}>
                  {d.label}
                </Links>
              </li>
            );
          })}
        </LinkContainer>
        <Form>
          <h3>Sign up for our newsletter</h3>
          <Input type="text" id="Email" name="Email" placeholder="Email" />
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </Container>
      <SocialMedia>
        <ImIcons.ImPinterest2 /> <FaIcons.FaInstagram /> <FaIcons.FaDribbble />
        <FiIcons.FiYoutube />
        <FiIcons.FiTwitter />
      </SocialMedia>
    </FooterSection>
  )
}

const FooterSection = styled.footer`
  width: 100%;
  position: relative;
  background-color: #070617;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Address = styled.div`
  & h3 {
    padding-top: 1.5rem;
    color: white;
  }
`;

const Form = styled.form`
display: flex;
flex-direction: column;
width: 30rem;

  & h3 {
    color: white;
    padding-bottom: 2.5rem;
  }

`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 45px 45px;
`;

const About = styled.div`
  width: 70ch;

  & h3 {
    color: white;
    padding-bottom: 25px;
  }
`;

const Logo = styled.img`
  height: 25px;
`;
const LinkContainer = styled.ul`
  display: inline-block;

  & h3 {
    color: white;
    padding-bottom: 25px;
  }
  & li {
    line-height: 1.6;
  }
  @media (max-width: 1024px) {
  }
`;

const Border = styled.hr`
  border-top-color: white;
  opacity: 0.5;
`;
const Links = styled(Link)`
  margin-right: 50px;
  font-size: ${(props) => props.theme.font.size.medium};
  text-transform: uppercase;
  color: white;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.variant.tertiary};
  }
  @media (max-width: 1024px) {
  }
`;

const SocialMedia = styled.div`
  width: 80%;
  border-top: 1px solid #ffffff;
  padding: 0 45px;
  font-size: ${(props) => props.theme.font.size.heading4};
  height: 9.5rem;
  padding-bottom: 4.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const SubmitButton = styled.button`
  margin: 25px 0;
  border-radius: 3px;
  display: inline-block;
  cursor: pointer;
  color: ${(props) => props.theme.variant.primary};
  font-weight: 600;
  font-size: ${(props) => props.theme.font.medium};
  background: ${(props) => props.theme.variant.tertiary};
  border: solid 2px ${(props) => props.theme.variant.primary};
  padding: 9px 23px;
  text-decoration: none;
  transition: background 0.02s ease-in-out;
  &:hover {
    background: #be5c6e;
  }
`;

const Input = styled.input`
  width: 100%;
  padding-bottom: 20px;
  background: none;
  border: none;
  border-bottom: 1px solid #ffffff;
  text-transform: uppercase;
  outline: none;
  transition: border-color 0.2s;
  &::placeholder {
    color: #ffffff;
  }
  &:focus {
    border-bottom-color: #ed738a;
  }
`;