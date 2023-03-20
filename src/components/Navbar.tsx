import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavbarStyled = styled(Navbar)`
  background-color: #2c2d2e;

  & .nav-link {
    font-size: 1.5rem;
    color: white;
  }

  & .nav-link.active {
    color: red;
  }

  & .basic-navbar-nav {
    color: white;
  }
`;

const NavigationBar: React.FC = () => {
  return (
    <NavbarStyled variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Sobre Mim
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#certificados">
              <NavLink
                to="/certificados"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Certificados
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavbarStyled>
  );
};

export default NavigationBar;
