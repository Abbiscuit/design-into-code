import React from 'react';
import Navbar from '../components/Navbar';
import { Container } from '../components/common.styles';

const About = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <h3>About Page</h3>
        <p>About this page.........</p>
      </Container>
    </div>
  );
};

export default About;
