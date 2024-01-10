import React from "react";
import { fadein } from "../../styles/animations/FadeIn";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Grid } from "@mui/material";

const PageTransitionStyle = styled(Grid)`
  animation-name: ${fadein};
  animation-duration: 2s;
  animation-iteration-count: 1;
  transition: all 4s;
`;

export default PageTransitionStyle;
