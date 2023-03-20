import React from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";

interface HomeRowProps {
  id: string;
  title: string;
  children: JSX.Element;
}

const HomeStyledRow = styled(Row)`
  margin: 2rem 0;
  font-size: 1.5rem;
`;

const HomeRow: React.FC<HomeRowProps> = (props) => {
  return (
    <HomeStyledRow id={props.id}>
      <h1>{props.title}</h1>
      {props.children}
    </HomeStyledRow>
  );
};

export default HomeRow;
