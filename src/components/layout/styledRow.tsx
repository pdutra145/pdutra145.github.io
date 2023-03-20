import React from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";

const StyledRow = styled(Row)`
  // border: 1px solid #343536;
  // background-color: #343536;
  margin: 1rem 0;

  & .card-body {
    background-color: #343536;
  }

  & .card-text {
    text-align: justify center;
  }

  & .card-title {
    margin-bottom: 20px;
  }

  & .card-text,
  & .card-title {
    font-size: larger;
  }
`;

export default StyledRow;
