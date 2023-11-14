import React from 'react';
import Header from '../views/Header';
import Welcome from '../views/Welcome';
import { Section } from '../style/Globals';

export default class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <Header />
        <Section>
          <Welcome />
        </Section>
      </>
    );
  }
}
