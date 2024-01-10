import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Outlet } from "react-router";
import PageTransitionStyle from "./PageTransitionStyle";
import { Stack } from "@mui/material";

const RootLayout: React.FC = () => {
  return (
    <Stack spacing={10}>
      <Navbar />
      <PageTransitionStyle>
        <Outlet />
      </PageTransitionStyle>
      <Footer />
    </Stack>
  );
};

export default RootLayout;
