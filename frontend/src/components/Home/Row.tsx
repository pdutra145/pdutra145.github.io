import React from "react";
import { Grid } from "@mui/material";

interface HomeRowProps {
  id: string;
  title: string;
  children: JSX.Element;
}

const HomeRow: React.FC<HomeRowProps> = (props) => {
  return (
    <Grid
      container
      sx={{
        fontSize: "1.5rem",
        // margin: "2rem 0",
        justifyContent: "center",
      }}
      id={props.id}
    >
      <Grid xs={12}>
        <h1>{props.title}</h1>
      </Grid>
      {props.children}
    </Grid>
  );
};

export default HomeRow;
