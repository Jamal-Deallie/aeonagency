import React from "react";
import { Jumbotron } from "../components";
import { ContactContainer } from "../containers";

export default function ContactPage() {
  return (
    <div data-scroll>
      <Jumbotron
        title={"Get in Touch with Us"}
        subheader={"We're Here to Help"}
      />
      <ContactContainer />
    </div>
  );
}
