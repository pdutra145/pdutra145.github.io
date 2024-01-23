import React from "react";
import { Grid, Typography } from "@mui/material";

interface HomeRowProps {
  id: string;
  title: string;
  children:React.ReactNode;
}

const HomeRow: React.FC<HomeRowProps> = (props) => {
  return (
    <Grid
      container
      sx={{
        fontSize: "1.5rem",
        gap:5,
        justifyContent: "center",
        marginY:'1.5rem'
      }}
      id={props.id}
    >
      <Grid xs={12}>
        <Typography variant="h3" component={'h1'}>{props.title}</Typography>
      </Grid>
      {props.children}
    </Grid>
  );
};

export default HomeRow;
