import React from "react";
import styled from "styled-components";
import { ProjectData as Data } from "../shared/ProjectData";

export default function ProjectContainer() {
  return (
    <ProjectSection>
      <Container>
        <Subheader>
          <img src="/images/stars/star_1.svg" />
          <p>OUR PROJECTS</p>
          <h3>Discover the most fascinating projects for our clients</h3>
        </Subheader>
        <Contents>
          {Data.map((d) => {
            return (
              <div key={d.id}>
                <img src={d.src} alt={d.alt} />
              </div>
            );
          })}
        </Contents>
      </Container>
    </ProjectSection>
  );
}

const ProjectSection = styled.section`
  width: 100%;
  padding-bottom: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 95vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subheader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.variant.tertiary};
  & h3 {
    margin: 2.5rem 0 7.5rem 0;
    font-size: ${(props) => props.theme.font.size.heading4};
    width: 500px;
    text-align: center;
  }
  & img {
    height: 5rem;
  }
`;

const Contents = styled.div`
  height: 100%;
  display: grid;
  grid-gap: 0.2rem;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: stretch;
  align-content: center;
  & div {
    background: rgba(0, 0, 0, 0.7);
    cursor: pointer;
    transition: background .04s ease-in-out;
    &:hover {
      background: none;
    }
  }
  & :nth-of-type(1) {
    grid-column: 1 / span 2;
    grid-row: span 1;
    position: relative;
  }
  & :nth-of-type(2) {
    grid-column: 3 / span 4;
    grid-row: span 1;
  }
  & :nth-of-type(3) {
    grid-column: 7 / span 2;
    grid-row: span 1;
  }
  & :nth-of-type(4) {
    grid-column: 9 / span 2;
    grid-row: span 1;
  }
  & :nth-of-type(5) {
    grid-column: 1 / span 4;
    grid-row: span 1;
  }
  & :nth-of-type(6) {
    grid-column: 5 / span 2;
    grid-row: span 1;
  }
  & :nth-of-type(7) {
    grid-column: 7 / span 2;
    grid-row: span 1;
  }
  & :nth-of-type(8) {
    grid-column: 9 / span 2;
    grid-row: span 1;
  }
  & img {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: multiply;
  }
`;

const InnerContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 375px;
  padding: 0 2rem;
  & img {
    height: 75px;
  }
  & p {
    text-align: center;
  }
  & h3 {
    margin: 2.5rem 0;
    color: white;
  }
`;

const MissionSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
