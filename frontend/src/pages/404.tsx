import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const ErrorPage = () => {
  return (
    <Grid container justifyContent={"center"}>
      <Grid xs={12}>
      <h1>Ocorreu um erro</h1>
      </Grid>
      <Grid justifyContent={"center"}><Link to="/">Go back home</Link></Grid>
    </Grid>
  );
};

export default ErrorPage;
