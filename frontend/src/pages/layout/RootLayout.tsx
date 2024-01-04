import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Outlet } from "react-router";
import PageTransitionStyle from "./PageTransitionStyle";

const RootLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <PageTransitionStyle>
        <Outlet />
      </PageTransitionStyle>
      <Footer />
    </>
  );
};

export default RootLayout;
