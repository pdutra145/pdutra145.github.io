import React from "react";
import styled from "styled-components";
// import { Container, Row, Col } from "react-bootstrap";
import { Grid, Stack, Divider } from "@mui/material";
import Box from "@mui/material";

const StyledFooter = styled(Stack)`
background-color: #38393a;
color:white;

& i.bi {
  font-size: 2rem;
}

& i {
  margin: 2rem 1rem;
  color:ivory;
}
`;


const Footer = () => {
  return (
    <StyledFooter
      spacing={2}
      maxHeight={10}
      // id="footer"
      justifyContent={"space-between"}
    >
      <Divider orientation="horizontal" variant="fullWidth" color="white"/>
      <Grid container justifyContent={"space-between"}>
        <Grid container xs={6} justifyContent={"center"}>
          <Grid xs={2} maxHeight={5}>
            <a
              href="https://www.linkedin.com/in/pdutra145/"
              target="_blank"
              title="Linkedin"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </Grid>
          <Grid xs={2}>
            <a href="https://github.com/pdutra145" target="_blank">
              <i className="bi bi-github" title="Github"></i>
            </a>
          </Grid>
          <Grid xs={2}>
            <a href="https://twitter.com/pdutra145" target="_blank">
              <i className="bi bi-twitter" title="Twitter"></i>
            </a>
          </Grid>
        </Grid>
        <Grid container xs={6} justifyContent={"center"} alignItems={"center"}>
          <span>
            Developed by <strong>Pedro Dutra</strong>
          </span>
        </Grid>
      </Grid>
    </StyledFooter>
  );
};

export default Footer;
