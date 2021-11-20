import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { NavData as Data } from "../../shared/NavData";
import { useToggle } from "../../hooks/useToggle";

export default function Navigation() {
  const [open, setOpen] = useToggle();
  return (
    <Container>
      <Navbar>
        <Logo src="/images/logos/aeon_logo.svg" />
        <LinkContainer>
          {" "}
          {Data.map((d) => {
            return (
              <Link key={d.id} to={d.path}>
                {d.label}
              </Link>
            );
          })}{" "}
        </LinkContainer>
        <ToggleBtn
          onClick={() => {
            setOpen(!open);
          }}
        >
          <IconBar open={open} />
          <IconBar open={open} />
          <IconBar open={open} />
        </ToggleBtn>
      </Navbar>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 75px;
`;
const Navbar = styled.nav`
  padding: 0 50px;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  @media (max-width: 1024px) {
    margin: 0 auto;
  }
`;

const LinkContainer = styled.ul`
  margin: 0 auto;
  @media (max-width: 1024px) {
  }
`;

const Link = styled(NavLink)`
  margin-right: 50px;
  font-size: ${(props) => props.theme.font.medium};
  text-transform: uppercase;
  color: white;
  font-weight: 500;
  @media (max-width: 1024px) {
  }
`;

const ToggleBtn = styled.div`
  display: none;
  @media (max-width: 1024px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 30px;
    cursor: pointer;
    gap: 5px;
    z-index: 10;
  }
`;

const IconBar = styled.span`
  @media (max-width: 1024px) {
    width: 30px;
    height: 3px;
    background: ${(props) => props.theme.variant.secondary};
    transition: 0.3s;
    &:nth-of-type(1) {
      transform: ${(props) =>
        props.open ? "translate3d(0,8px,0) rotate(45deg)" : null};
    }
    &:nth-of-type(2) {
      opacity: ${(props) => (props.open ? "0" : "1")};
    }
    &:nth-of-type(3) {
      transform: ${(props) =>
        props.open ? "translate3d(0,-8px,0) rotate(-45deg)" : null};
    }
  }
`;
