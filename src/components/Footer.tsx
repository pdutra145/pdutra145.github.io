import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const StyledFooterContainer = styled(Container)`
  border-top: 1px solid #b8b2b2;
  display: flex;
  justify-content: space-between;

  & div {
    padding: 1rem 2rem;
  }

  & i.bi {
    font-size: 2rem;
  }

  & i {
    margin: 0px 10px;
  }
`;

const Footer = () => {
  return (
    <StyledFooterContainer
      fluid
      // className="d-flex justify-content-between"
      id="footer"
    >
      <div>
        <a
          href="https://www.linkedin.com/in/pedro-dutra-173a83242/"
          target="_blank"
          title="Linkedin"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/pdutra145" target="_blank">
          <i className="bi bi-github" title="Github"></i>
        </a>
      </div>
      <div>
        <span>
          Developed by <strong>Pedro Dutra</strong>
        </span>
      </div>
    </StyledFooterContainer>
  );
};

export default Footer;
