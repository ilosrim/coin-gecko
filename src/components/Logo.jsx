import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from '../imgs/logo.png';

const Logo = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md="12" className="text-center mt-5">
            <img src={logo} alt="logo" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Logo;