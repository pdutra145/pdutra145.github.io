import { CircularProgress, Grid } from "@mui/material";
import { useContext } from "react";
import { LoadingContext } from "../context/Loading";

function ResumePage() {
  const { isLoading } = useContext(LoadingContext);

  return (
    <Grid container justifyContent={"center"}>
      {isLoading ? (
        <Grid justifyContent={"center"}>
          <CircularProgress />
        </Grid>
      ) : (
        <Grid
          component={"embed"}
          lg={8}
          height={"75vh"}
          type="application/pdf"
          src="pdf\Meu Resumo.pdf"
        ></Grid>
      )}
    </Grid>
  );
}

export default ResumePage;
