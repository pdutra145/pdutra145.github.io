import React, { Key } from "react";
import HomeRow from "./Row";
import { styled } from "@mui/material";
import { Introduction } from "../../models/apiModels";

const HomeStyledUl = styled("ul")({
  "& li": {
    textAlign: "justify",
    lineHeight: "2.5rem",
  },
});

interface Props {
    data:Introduction[]
    title:string,
    id:string
}

const HomeUL = (props:Props) => {

  return (
    <HomeRow title={props.title} id={props.id}>
      <HomeStyledUl>
        {props.data &&
          props.data.map(
            (record: Introduction, index: Key) => (
              <li key={index}>{record.text}</li>
            )
          )}
      </HomeStyledUl>
    </HomeRow>
  );
};



export default HomeUL;
