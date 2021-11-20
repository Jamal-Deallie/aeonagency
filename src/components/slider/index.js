import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { QuoteData as quotes } from "../../shared/QuoteData";
import * as FaIcons from "react-icons/fa";

export default function Slider() {
  const [active, setActive] = useState(0);

  const handleSetClick = (e) => {
    setActive(e.target.getAttribute("data-quote"));
  };

  useEffect(() => {
    const lastIndex = quotes.length - 1;
    let scroll = setInterval(() => {
      active < lastIndex ? setActive(active + 1) : setActive(0);
    }, 5000);
    return () => {
      clearInterval(scroll);
    };
  }, [active]);

  const { quote, title, src } = quotes[active];

  return (
    <QuoteContainer>
      <FaIcons.FaQuoteLeft className="icon" />
      <Quote>
        <p>{quote} </p>
        <img src={src} alt={title} />
        <p>{title}</p>
        <Buttons>
          {Object.keys(quotes).map((index) => (
            <DotBtn
              onClick={(e) => handleSetClick(e)}
              data-quote={index}
              key={index}
            />
          ))}
        </Buttons>
      </Quote>
    </QuoteContainer>
  );
}

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1440px;
  & .icon {
    font-size: 2.5em;
    color: ${(props) => props.theme.variant.tertiary};
  }
`;

const Quote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  width: 1440px;
  & img {
    height: 8rem;
    margin: 50px 0;
  }
  & p:first-child {
    font-size: ${(props) => props.theme.font.size.heading5};
    font-weight: 600;
    font-style: italic;
    text-align: center;
    width: 35vw;
  }
`;

const Buttons = styled.div`
  color: ${(props) => props.theme.variant.secondary};
  display: flex;
  padding-top: 2.5rem;
`;

const DotBtn = styled.span`
  width: 2rem;
  height: 2rem;
  margin: 0 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:before {
    content: "";
    border-radius: 50%;
    background: #ffffff;
    width: 0.6rem;
    height: 0.6rem;
    transition: background-color 0.3s ease-in-out;
  }
`;
