import React from "react";
import { Jumbotron } from "../components";
import {
  CEOContainer,
  FeatureContainer,
  StoryContainer,
  StatisticsContainer,
  ServicesContainer
} from "../containers";

export default function AboutPage() {
  return (
    <div data-scroll>
      <Jumbotron title={"About Us"} subheader={"We Are Aeon"} />
      <StoryContainer />
      <FeatureContainer/>
      <CEOContainer />
      <StatisticsContainer />
      <ServicesContainer/>
    </div>
  );
}
