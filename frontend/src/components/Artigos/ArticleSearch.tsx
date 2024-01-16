import { Grid, IconButton, TextField } from "@mui/material";
import { common, red } from "@mui/material/colors";
import { Add, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";


const ArticleSearch = () => {
  return (
    <Grid
      id="search-article"
      container
      xs={6}
      justifyContent={"center"}
      gap={2}
    >
      <Grid
        component={TextField}
        xs={9}
        placeholder="Pesquisar Artigo"
        // label="help"
        variant="standard"
        fullWidth
        sx={{
          "& .css-1x51dt5-MuiInputBase-input-MuiInput-input": {
            color: common.white,
          },
          "& .css-953pxc-MuiInputBase-root-MuiInput-root::before": {
            borderBottomColor: red[200],
          },
          "& .css-953pxc-MuiInputBase-root-MuiInput-root:hover::before": {
            borderBottomColor: red[300],
          },
          "& .css-953pxc-MuiInputBase-root-MuiInput-root::after": {
            borderBottomColor: red[600],
          },
        }}
      ></Grid>
      <Grid
        component={IconButton}
        xs={1}
        sx={{
          "& .MuiButtonBase-root": {
            color: red[500],
          },
        }}
        id="search-button-article"
      >
        <Search sx={{ color: red[500] }} />
      </Grid>
      <Link to="/artigos/create">
        <Grid
          component={IconButton}
          xs={1}
          sx={{
            "& .MuiButtonBase-root": {
              color: red[500],
            },
          }}
          id="create-button-article"
        >
          <Add sx={{ color: red[500] }} />
        </Grid>
      </Link>
    </Grid>
  );
};

export default ArticleSearch;
