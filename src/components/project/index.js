import React from 'react';
import styled from 'styled-components';
import Button from '../button/index';
export default function ProjectDetails({
  showProject,
  setShowProject,
  project,
}) {
  const { brand, src, alt, desc, date, award_title, award } = project;
  return showProject ? (
    <AwardSection>
      <AwardImg src={src} alt={alt} />
      <Details>
        <h1>{brand}</h1>
        <p>{desc}</p>
        <p>{date}</p>
        <p>{award}</p>
        <p>{award_title}</p>
        <StyledButton
          onClick={() => {
            setShowProject(!showProject);
          }}>
          Close
        </StyledButton>{' '}
      </Details>
    </AwardSection>
  ) : null;
}

const AwardSection = styled.section`
  background-color: ${props => props.theme.variant.quinary};
  width: 35vw;
  height: 80vh;
  position: absolute;
  z-index: 100;
  & img {
    width: 35vw;
  }
`;

const StyledButton = styled(Button)`
  background-color: #fec821;
`;

const AwardImg = styled.img`
  width: 35vw;
`;

const Details = styled.div`
padding: 2rem 2rem;
`;
