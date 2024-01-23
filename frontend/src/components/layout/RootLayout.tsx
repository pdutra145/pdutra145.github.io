import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Box, Fade, Stack, createTheme, styled } from "@mui/material";
import "../../styles/global.css";
import { ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { grey, red } from "@mui/material/colors";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#d81216",
    },
    secondary: {
      main: "#060606",
    },
    background:{
      default:grey[200]
    }
  },
  typography: {
    body1: {
      fontWeight: 500,
      textAlign: "center",
      "& a": {
        color: red[500],
        textDecoration: "none",
      },
    },
    body2: {
      "& strong": {
        color: red[500],
      },
    },
    h3: {
      textAlign: "center",
    },
  }
};

const theme = createTheme(themeOptions);

const ChildrenBox = styled(Box)(({theme}) => ({
  backgroundColor:grey[200]
}))

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Stack minHeight={"100vh"}>
        <Navbar />
        <Fade in={true} timeout={500}>
          <ChildrenBox flexGrow={1}>{children}</ChildrenBox>
        </Fade>
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};

export default RootLayout;
