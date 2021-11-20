import React from "react";
import { Jumbotron } from "../components";
import { TeamsContainer } from "../containers";

export default function TeamPage() {
  return (
 <div data-scroll>
      <Jumbotron title={"Our Team"} subheader={"The Best Leaders"} />
      <TeamsContainer />
    </div>
  );
}
