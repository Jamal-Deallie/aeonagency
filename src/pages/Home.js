import React from "react";
import { Navigation, Footer } from "../components";
import {
  JumbotronContainer,
  FeatureContainer,
  MissionContainer,
  ClientsContainer,
  CTAContainer,
  ProjectsContainer,
} from "../containers";

export default function HomePage() {
  return (
    <div data-scroll>
      <JumbotronContainer />
      <FeatureContainer />
      <MissionContainer />
      <ClientsContainer />
      <ProjectsContainer />
      <CTAContainer />
    </div>
  );
}
