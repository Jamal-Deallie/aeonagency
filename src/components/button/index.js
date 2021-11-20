import React from "react";
import styled from "styled-components";

export default function Button({ children, ...restProps }) {
  return <MainButton {...restProps}>{children}</MainButton>;
}

const MainButton = styled.button`
  border-radius: 3px;
  display: inline-block;
  cursor: pointer;
  color: ${(props) => props.theme.variant.primary};
  font-weight: 600;
  font-size: ${(props) => props.theme.font.medium};
  background: ${(props) => props.theme.variant.quaternary};
  padding: 9px 23px;
  text-decoration: none;
`;
