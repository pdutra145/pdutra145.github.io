import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Key } from "react";

interface CertificateProps {
  certificate_id: Key;
  imageSrc:string,
  title:string,
  description:string
}

const Certificate = (props: CertificateProps) => {
  return (
    <Card variant="outlined" sx={{backgroundColor:'#2c2c2c', color:'white'}}>
      <CardMedia component="img" src={props.imageSrc}/>
      <CardContent>
        <Typography variant="h5" component={"h1"} color={"#dedede"}  gutterBottom>
          {props.title}
        </Typography>
        <Typography component={"p"}>{props.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Certificate;