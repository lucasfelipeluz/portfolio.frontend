import React from 'react';
import Header from '../views/Header';
import Welcome from '../views/Welcome';
import { Section } from '../style/Globals';
import ProjectView from '../views/Project';
import { Slide } from 'react-slideshow-image/';
import 'react-slideshow-image/dist/styles.css';
import ContactView from '../views/Contact';
import FooterView from '../views/Footer';

export default class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <Header />

        <Welcome />

        <ProjectView />

        <ContactView />

        <FooterView />
      </>
    );
  }
}
