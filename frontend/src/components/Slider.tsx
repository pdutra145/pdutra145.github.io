import React, { useState } from "react";
import { sliderImgs, sliderImg } from "../models/slider-model";
import { Carousel } from "react-bootstrap";
import StyledRow from "./layout/styledRow";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { Pagination, Grid, Box, Stack } from "@mui/material";


interface SliderProps {
  sliderId: string;
  images: sliderImgs;
  cardTitle: string;
  cardText: string;
}

const Slider = (props: SliderProps) => {
  const [page, setPage] = useState(1);
  const [image, setImage] = useState<sliderImg>(
    props.images.find((el: sliderImg, idx) => el.id === page) as sliderImg
  );

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    const img = props.images.find(
      (el: sliderImg, idx) => el.id === value
    ) as sliderImg;
    setImage(img);
  };

  return (
    <Stack>
      <Box
        component={"img"}
        src={image.src}
        alt={image.alt}
        sx={{
          maxWidth: "100%",
          borderColor: "white",
          borderWidth: 5,
        }}
      />
      <Pagination
        count={props.images.length}
        defaultPage={page}
        onChange={handleChange}
        color="primary"
        sx={{
          margin: "1rem 0",
          alignSelf: 'center'
        }}
        id='slider-pagination'
      />
    </Stack>
  );
};

export default Slider;

// const SliderStyledRow = styled(StyledRow)`
//   background-color: #343536;
//   & ${(props) => props.sliderid || ""} {
//     background-color: #343536;
//   }

//   & .card-body .card-text {
//     text-align: center;
//   }
// `;

// const Slider: React.FC<SliderProps> = (props) => {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex: number) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <SliderStyledRow className="card mb-5 col-12" sliderid={props.sliderId}>
//       <Carousel
//         controls={isMobile ? false : true}
//         touch
//         activeIndex={index}
//         onSelect={handleSelect}
//         id={props.sliderId}
//       >
//         {props.images.map((img, idx) => (
//           <Carousel.Item key={idx + "img"}>
//             <img className="w-100 img-fluid" src={img.src} alt={img.alt} />
//           </Carousel.Item>
//         ))}
//       </Carousel>
//       <div className="card-body">
//         <h5 className="card-title">{props.cardTitle}</h5>
//         <p className="card-text">{props.cardText}</p>
//       </div>
//     </SliderStyledRow>
//   );
// };

// export default Slider;
