import React, { useContext, useState } from "react";
import PageTransitionStyle from "../layout/PageTransitionStyle";
import { Breadcrumb } from "react-bootstrap";
import styled from "styled-components";
import CertificatePage from "./Page";
import { CircularProgress, Grid } from "@mui/material";
import { LoadingContext } from "../../context/Loading";

const StyledBreadcrumb = styled(Breadcrumb)`
  margin: 2rem;
`;

const CertficatesPage = () => {
  return (
    <PageTransitionStyle container justifyContent={"center"}>
      <Grid container xs={6} justifyContent={"center"}>
        <CertificatePage />
      </Grid>
    </PageTransitionStyle>
  );
};

export default CertficatesPage;
