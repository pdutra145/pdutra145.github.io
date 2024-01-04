import React, { useState } from "react";
import { sliderImgs } from "../models/slider-model";
import { Carousel } from "react-bootstrap";
import StyledRow from "./layout/styledRow";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

interface SliderProps {
  sliderId: string;
  images: sliderImgs;
  cardTitle: string;
  cardText: string;
}

const SliderStyledRow = styled(StyledRow)`
  background-color: #343536;
  & ${(props) => props.sliderid || ""} {
    background-color: #343536;
  }

  & .card-body .card-text {
    text-align: center;
  }
`;

const Slider: React.FC<SliderProps> = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <SliderStyledRow className="card mb-5 col-12" sliderid={props.sliderId}>
      <Carousel
        controls={isMobile ? false : true}
        touch
        activeIndex={index}
        onSelect={handleSelect}
        id={props.sliderId}
      >
        {props.images.map((img, idx) => (
          <Carousel.Item key={idx + "img"}>
            <img className="w-100 img-fluid" src={img.src} alt={img.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.cardText}</p>
      </div>
    </SliderStyledRow>
  );
};

export default Slider;
