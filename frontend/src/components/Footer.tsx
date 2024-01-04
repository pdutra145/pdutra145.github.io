import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const StyledFooterContainer = styled(Container)`
  border-top: 1px solid #b8b2b2;
  padding: 10px;
  max-height: 5rem;

  & i.bi {
    font-size: 2rem;
  }

  & i {
    margin: 1rem 1rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooterContainer fluid className="px-5" id="footer">
      <Row>
        <Col md={6}>
          <a
            href="https://www.linkedin.com/in/pdutra145/"
            target="_blank"
            title="Linkedin"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/pdutra145" target="_blank">
            <i className="bi bi-github" title="Github"></i>
          </a>
          <a href="https://twitter.com/p___dut" target="_blank">
            <i className="bi bi-twitter" title="Twitter"></i>
          </a>
        </Col>
        <Col md={6}>
          <span>
            Developed by <strong>Pedro Dutra</strong>
          </span>
        </Col>
      </Row>
    </StyledFooterContainer>
  );
};

export default Footer;
