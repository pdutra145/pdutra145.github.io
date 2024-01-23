import { Box, Grid, Stack, styled } from "@mui/material";
import React from "react";
import RootLayout from "../components/layout/RootLayout";

const CV = styled("embed")({
  height: "75vh",
  width: "75vw",
  margin: "1rem 0",
  alignSelf:'center'
  // flexGrow: 0.75,
});

function ResumePage() {
  return (
    <RootLayout>
      <Stack justifyContent={"center"}>
        <CV type="application/pdf" src="/pdf/Meu Resumo.pdf"  />
      </Stack>
    </RootLayout>
  );
}

export default ResumePage;
