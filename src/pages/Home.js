import React from "react";
import { Navigation, Footer } from "../components";
import {
  HeroContainer,
  FeatureContainer,
  MissionContainer,
  ClientsContainer,
  CTAContainer,
  ProjectsContainer,
} from "../containers";

export default function HomePage() {
  return (
    <div data-scroll>
      <HeroContainer />
      <FeatureContainer tertiary={true}/>
      <MissionContainer />
      <ClientsContainer />
      <ProjectsContainer />
      <CTAContainer />
    </div>
  );
}
