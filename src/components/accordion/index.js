import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { useToggle } from '../../hooks/useToggle';
import cn from 'classnames';

export default function Accordion() {
  const [open, setOpen] = useToggle();
  const tween = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    tween.current = gsap.timeline().to(
      contentRef.current,
      {
        height: 'auto',
        ease: 'expo.easeInOut',
      },
      0.025
    );
    return () => {
      tween.current.kill();
    };
  }, []);

  useEffect(() => {
    if (open) {
      tween.current.play();
    } else {
      tween.current.reverse();
    }
  }, [open]);

  return (
    <AccordionContainer>
      <AccordionMenu
        onClick={() => setOpen(!open)}
        className={cn({ active: open })}>
        <h3>Questions</h3>
      </AccordionMenu>
      <AccordionContent ref={contentRef}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum
          congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet
          et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit.
          Nulla quis lorem ut libero malesuada feugiat.
        </p>
      </AccordionContent>
    </AccordionContainer>
  );
}

const AccordionContainer = styled.div`
  width: 40rem;
  padding: 0 2rem;
`;

const AccordionMenu = styled.div`
  width: 40rem;
  border: ${props => props.theme.variant.quinary} solid 3px;
  color: black;
  padding: 1rem;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  border-radius: 0.3rem;
  transition: background 0.5s ease-in-out;
  &:hover {
    background: ${props => props.theme.variant.quinary};
    color: ${props => props.theme.variant.primary};
  }
  &.active {
    background: ${props => props.theme.variant.quinary};
    color: ${props => props.theme.variant.primary};
  }
`;

const AccordionContent = styled.div`
  height: 0;
  overflow: hidden;
  color: black;
  padding: 0 1rem;
`;
