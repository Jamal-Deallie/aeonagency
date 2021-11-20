import React from "react";
import styled from "styled-components";
import useMousePosition from "../../hooks/useMousePosition";

export default function Cursor() {
  // 1.
  const { x, y } = useMousePosition();
  return (
    <>
      {/* 2. */}
      <Ring style={{ left: `${x}px`, top: `${y}px` }}/>
      {/* 3. */}
      {/* <Dot style={{ left: `${x}px`, top: `${y}px` }}/> */}
    </>
  );
}

const Ring = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 22px;
  height: 22px;
  border: 2.5px solid #fec820;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  -webkit-transition-duration: 100ms;
  transition-duration: 100ms;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  will-change: width, height, transform, border;
  z-index: 999;
  pointer-events: none;
`;

const Dot = styled.div`
position: fixed;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background-color: black;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  z-index: 999;
  pointer-events: none;
  `;
