import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Outlet } from "react-router";
import PageTransitionStyle from "./PageTransitionStyle";
import { Stack, styled } from "@mui/material";

const RootStack = styled(Stack)`
text-align: center;
color: ivory;

background-color: #38393a;

& a {
  color: rgb(255, 0, 0);
  text-decoration: none;
}

& a:hover {
  color: rgb(255, 0, 0);
  text-decoration: underline;
}

& strong {
  color: red;
  font-weight: bold;
}
`

const RootLayout: React.FC = () => {
  return (
    <RootStack spacing={10}>
      <Navbar />
      <PageTransitionStyle>
        <Outlet />
      </PageTransitionStyle>
      <Footer />
    </RootStack>
  );
};

export default RootLayout;
