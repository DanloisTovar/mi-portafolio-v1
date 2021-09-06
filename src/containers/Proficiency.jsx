import React from 'react';
import build from '../assets/lottie/build';

import { SkillBars } from '../portfolio';
import { Container, Row, Progress, Col } from 'reactstrap';

import { Fade } from 'react-reveal';

import GreetingLottie from '../components/DisplayLottie';

const Habilidades = () => {
  return (
    <Container className="section section-lg">
      <Fade bottom duration={1000} distance="40px">
        <Row>
          <Col lg="6">
            <h1 className="h1">Habilidades</h1>
            {SkillBars.map((skill) => {
              return (
                <div className="progress-info" key={skill.Stack}>
                  <div className="progress-label habilidades">
                    <p>{skill.Stack}</p>
                  </div>
                </div>
              );
            })}
          </Col>
          <Col lg="6">
            <GreetingLottie animationData={build} />
          </Col>
        </Row>
      </Fade>
    </Container>
  );
};

export default Habilidades;
