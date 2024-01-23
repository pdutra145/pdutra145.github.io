import { styled, AppBar, Box, Typography, Grid, SxProps } from "@mui/material";
import React from "react";
import { Link } from "gatsby";
import { grey, red, common } from "@mui/material/colors";
import { StaticImage } from "gatsby-plugin-image";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: common.white,
  padding: "1.25rem 0",
  justifyContent: "space-evenly",
  fontSize: "1.5rem",
  position:'static',
  height:'10vh'
}));



const navStyle:SxProps = {
  transition: "all 0.5s",
  fontSize: "1.5rem",
  "& a:hover": {
    transform: "scale(1.3)",
  },
  textDecoration: "none",
}

const NavLink = styled(Link)(navStyle);

const Image = styled('img')({
  height: "5vh",
  borderRadius: 10,
});

// Define the type for the argument of the isActive function
type LinkProps = {
  isCurrent: boolean;
};

const isActive = ({ isCurrent }: LinkProps) => {
  return isCurrent
    ? { style: { ...navStyle,color: red[500], fontWeight: "bold" } }
    : { style: { ...navStyle,color: grey[500] } };
};

const Navbar = () => {
  return (
    <Grid component={StyledAppBar} container>
      <Grid item xs={3} >
        <Image src="/images/PD.png" alt='Pedro Dutra Website Logo'/>
      </Grid>
      <Grid container xs={6} justifyContent={'center'} alignItems={'center'} gap={5}>
        <Grid item>
          <NavLink to="/" getProps={isActive}>
            Home
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink to="/certificados" getProps={isActive}>
            Certificados
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink to="/resumo" getProps={isActive}>
            Currículo
          </NavLink>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
