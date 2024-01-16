import { Grid, IconButton, MenuItem, Select, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
// import { purple, common } from "@mui/material/colors";

const ArticleSearch = () => {
  return (
    <Grid id="search-article" container xs={6} justifyContent={"center"}>
      <Grid
        component={TextField}
        item
        xs={10}
        placeholder="Pesquisar Artigo"
        label="help"
        variant="outlined"
        fullWidth
      ></Grid>
      {/* <Grid xs={4} >
        <Select id="select-articles">
          <MenuItem value="topic">Tópico</MenuItem>
          <MenuItem value="content">Conteúdo</MenuItem>
        </Select>
      </Grid> */}
      <Grid component={IconButton} xs={2} item id="create-button-article">
        <AddIcon />
      </Grid>
    </Grid>
  );
};

export default ArticleSearch;
