import React, { useState, useRef, useEffect, createRef } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { NavData as navItems } from '../../shared/NavData';

import gsap from 'gsap';

export default function Navigation() {
  const [menuTl] = useState(gsap.timeline({ paused: true }));
  let targets = gsap.utils.toArray('.link');

  const toggledMenu = {};

  useEffect(() => {
    menuTl
      .to(
        toggledMenu.menu,
        {
          duration: 0.1,
          top: '0',
          opacity: 1,
        },
        0
      )

      .to(
        toggledMenu.topBar,
        {
          duration: 0.1,
          x: 52,
          stroke: '#ED738A',
          rotation: 45,
        },
        0
      )
      .to(toggledMenu.middleBar, { duration: 0.1, alpha: 0 }, 0)
      .to(
        toggledMenu.bottomBar,
        { duration: 0.1, x: 52, stroke: '#ED738A', rotation: -45 },
        0
      )
      .to(targets, {
        duration: 0.1,
        y: 52,
        opacity: 1,
        stagger: 0.1,
        ease: 'power2.inOut',
      })
      .reverse();
  }, [targets]);

  const toggleMenuTimeline = () => {
    menuTl.reversed(!menuTl.reversed());
  };

  return (
    <Container>
      <Navbar>
        <Link to='/'>
          <Logo src='/images/logos/aeon_logo.svg' />
        </Link>
        <NavMenu
          column={true}
          // className={cn({ toggle: open })}
        >
          {navItems.map(item => {
            return (
              <Link key={item.id} to={item.path}>
                {item.label}
              </Link>
            );
          })}
        </NavMenu>
        <ToggleBtn>
          <svg
            viewBox='0 0 384 276'
            xmlns='http://www.w3.org/2000/svg'
            onClick={toggleMenuTimeline}>
            <line
              x1='16'
              y1='17'
              x2='368'
              y2='17'
              ref={e => (toggledMenu['topBar'] = e)}
            />
            <line
              x1='16'
              y1='139.2'
              x2='368'
              y2='139.2'
              ref={e => (toggledMenu['middleBar'] = e)}
            />
            <line
              x1='16'
              y1='261'
              x2='368'
              y2='261'
              ref={e => (toggledMenu['bottomBar'] = e)}
            />
          </svg>
        </ToggleBtn>
      </Navbar>
      <ToggleMenu column={true} ref={e => (toggledMenu['menu'] = e)}>
        {navItems.map(item => {
          return (
            <Link
              className='link'
              key={item.id}
              to={item.path}
              ref={e => (toggledMenu['link'] = e)}>
              {item.label}
            </Link>
          );
        })}
      </ToggleMenu>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 7.5rem;
`;
const Navbar = styled.nav`
  height: 7.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 5rem;
  padding-left: 2rem;
  @media (max-width: 76.8rem) {
    margin: 0 auto;
    padding-left: 2rem;
  }
`;

const NavMenu = styled.ul`
  margin: 0 auto;
  @media (max-width: 76.8rem) {
    display: none;
    & a {
      font-weight: bold;
    }
  }
`;

const Link = styled(NavLink)`
  margin-right: 50px;
  font-size: ${props => props.theme.font.medium};
  text-transform: uppercase;
  color: white;
  font-weight: 500;
  @media (max-width: 1024px) {
  }
`;

const ToggleBtn = styled.div`
  display: none;
  @media (max-width: 76.8rem) {
    display: flex;
    height: 4rem;
    width: 4rem;
    margin-right: 2rem;
    cursor: pointer;
    z-index: 2001;
    position: absolute;
    top: 2rem;
    right: 0;
    & svg {
      height: 2rem;
      & line {
        fill: #ffffff;
        fill: none;
        stroke: #ffffff;
        stroke-width: 32;
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-linejoin: bevel;
      }
    }
  }
`;

const IconBar = styled.span`
  @media (max-width: 1024px) {
    width: 30px;
    height: 3px;
    background: ${props => props.theme.variant.primary};
    transition: 0.3s;
    &:nth-of-type(1) {
      transform: ${props =>
        props.open ? 'translate3d(0,8px,0) rotate(45deg)' : null};
    }
    &:nth-of-type(2) {
      opacity: ${props => (props.open ? '0' : '1')};
    }
    &:nth-of-type(3) {
      transform: ${props =>
        props.open ? 'translate3d(0,-8px,0) rotate(-45deg)' : null};
    }
  }
`;

const ToggleMenu = styled.div`
  display: none;
  @media (max-width: 76.8rem) {
    background: ${props => props.theme.variant.quaternary};
    height: 100%;
    position: absolute;
    top: -100%;
    right: 0;
    left: 0;
    z-index: 2000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${props => (props.column ? 'column' : 'row')};
    font-size: ${props => props.theme.font.size.heading2};
    gap: 7rem;
    a {
      font-weight: bold;
      opacity: 0;
    }
  }
`;
