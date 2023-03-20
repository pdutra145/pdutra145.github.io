import React from "react";
import { Col } from "react-bootstrap";
import StyledRow from "./layout/styledRow";

interface CardProps {
  src: string;
  alt: string;
  title: string;
  children: JSX.Element;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <StyledRow className="justify-content-center">
      <Col lg={8}>
        <div className="card">
          <img
            src={props.src}
            className="card-img-top img-fluid"
            alt={props.alt}
          />
          <div className="card-body">
            <h3 className="card-title">{props.title}</h3>
            {props.children}
          </div>
        </div>
      </Col>
    </StyledRow>
  );
};

export default Card;
