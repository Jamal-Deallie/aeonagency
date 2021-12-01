import React from 'react';
import {Jumbotron} from '../components';
import {FaqsContainer} from '../containers'

export default function FaqsPage() {
  return (
    <>
    <Jumbotron
      title={'FAQs'}
      subheader={"Have a doubt?"}
    />
    <FaqsContainer/>
    </>
  );
}
