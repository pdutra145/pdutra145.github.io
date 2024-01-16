import React from "react";
import ArticleSearch from "../components/ArticleSearch";
import { Stack, Grid } from "@mui/material";

const Articles = () => {
  return (
    <Stack justifyContent={"center"} alignItems={'center'}>
      <ArticleSearch />
    </Stack>
  );
};

export default Articles;