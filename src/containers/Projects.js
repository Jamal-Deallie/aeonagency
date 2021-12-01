import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../components';
import { ProjectData as Data } from '../shared/ProjectData';
import { useToggle } from '../hooks/useToggle';
import { ProjectDetails } from '../components';
import cn from 'classnames';

export default function ProjectContainer() {
  const [project, setProject] = useState({});
  const [showProject, setShowProject] = useToggle();

  return (
    <ProjectSection className={cn({ 'overlay': showProject })}>
      <Container>
        <Subheader>
          <img src='/images/stars/star_11.svg' />
          <p>OUR PROJECTS</p>
          <h3>Discover the most fascinating projects for our clients</h3>
          <p>
            Veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit
          </p>
        </Subheader>
        <Contents>
          {Data.slice(0, 3).map((d, i) => {
            return (
              <>
                <ImgWrapper
                  key={d.id}
                  onClick={() => {
                    setShowProject(!showProject);
                    setProject(d);
                  }}>
                  <img src={d.src} alt={d.alt} />
                  <h3>{d.brand}</h3>
                  <p>{d.desc}</p>
                </ImgWrapper>
              </>
            );
          })}
        </Contents>
        <StyledButton>Discover More</StyledButton>
      </Container>
      <ProjectDetails showProject={showProject} setShowProject={setShowProject} project={project} />
    </ProjectSection>
  );
}

const ProjectSection = styled.section`
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  &.overlay{

  }
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
  color: ${props => props.theme.variant.tertiary};
  & h3 {
    margin: 2.5rem 0;
    font-size: ${props => props.theme.font.size.heading4};
    width: 500px;
    text-align: center;
  }
  & img {
    height: 5rem;
  }
  & p:last-child {
    padding-bottom: 7.5rem;
    width: 600px;
    text-align: center;
  }
`;

const Contents = styled.div`
  height: 100%;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 3fr 4fr 3fr;
  justify-items: stretch;
  align-content: center;
  & :nth-of-type(1) {
    position: relative;
  }
`;

const ImgWrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.variant.tertiary};
  & img {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledButton = styled(Button)`
  background-color: transparent;
  margin-top: 7.5rem;
  border: solid 0.2rem #ed738a;
  color: ${props => props.theme.variant.tertiary};
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #ed738a;
    color: ${props => props.theme.variant.primary};
  }
`;
