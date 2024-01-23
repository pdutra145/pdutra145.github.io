import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import { Grid, Stack, Divider, styled, Link, Typography } from "@mui/material";
import Box from "@mui/material";
import { common } from "@mui/material/colors";
import { GitHub, LinkedIn, X } from "@mui/icons-material";

const StyledFooter = styled(Stack)({
  backgroundColor: "#38393a",
  color: common.white,
  "& i.bi": {
    fontSize: "2rem",
  },
  "& i": {
    color: "ivory",
  },
});

const links = [
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/pdutra145/",
    icon: <LinkedIn />,
  },
  { title: "Github", href: "https://github.com/pdutra145", icon: <GitHub /> },
  { title: "Twitter", href: "https://twitter.com/pdutra145", icon: <X /> },
];

const Footer = () => {
  return (
    <StyledFooter
      id="footer"
      justifyContent={"space-between"}
      // alignItems={'center'}
    >
      <Divider orientation="horizontal" variant="fullWidth" color="white" />
      <Grid container justifyContent={"space-between"} paddingY="1rem">
        <Grid container xs={6} justifyContent={"center"}>
          {links.map((link) => (
            <Grid item xs={2}>
              <Link
                href={link.href}
                target="_blank"
                title={link.title}
                fontSize={"2rem"}
                color={common.white}
                sx={{
                  "& .MuiSvgIcon-root": {
                    color: common.white,
                  },
                }}
              >
                {link.icon}
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid container xs={6} justifyContent={"center"} alignItems={"center"}>
          <Typography component='span' variant='body2'>
            Developed by <strong>Pedro Dutra</strong>
          </Typography>
        </Grid>
      </Grid>
    </StyledFooter>
  );
};

export default Footer;
