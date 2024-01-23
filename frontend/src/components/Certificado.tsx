import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Key } from "react";
import { CertificateModel } from "../models/apiModels";
import { Blob, File } from "buffer";

interface CertificateProps {
  certificate_id: Key;
  imageSrc: string;
  title: string;
  description: string;
}

const fetchCertificates = async (id: Key) => {
  const apiHost = process.env.REACT_APP_API_HOST; // Make sure this is correctly set
  const query = {
    query: `
    query  {
      certificates {
        id
        description
        title
      }
    }`  };

  try {
    const response = await axios.post(`${apiHost}/graphql`, query);

    if (response.status === 200) {
      const certificates = response.data.data.certificates;

      for (const certificate of certificates) {
        const imageRes = await axios.get(`${apiHost}/image/${certificate.id}`, { responseType: 'blob' });
        if (imageRes.status === 200) {
          // const blob = new Blob([imageRes.data], { type: 'image/jpeg' }); // Adjust the type as necessary
          certificate['image'] = URL.createObjectURL(imageRes.data);
        }
      }



      return certificates;
    }
  } catch (error) {
    console.error('Error fetching certificate:', error);
    return null; // Or handle the error as per your application's needs
  }
};


const Certificado = (props: CertificateProps) => {
  // const [certificateData, setCertificateData] = useState<CertificateModel | undefined>()
  // useEffect(() => {
  //   const func = async () => {
  //     const data = await fetchCertificates(props.certificate_id)

  //   if (data) {
  //     setCertificateData(data);
  //   }
  //   }
  //   func()
  // }, []);

  // if (!certificateData) return <p>hello</p>

  return (
    <Card
      variant="outlined"
      sx={{ backgroundColor: "#2c2c2c", color: "white" }}
    >
      <CardMedia component="img" src={props.imageSrc} />
      <CardContent>
        <Typography
          variant="h5"
          component={"h1"}
          textAlign={"center"}
          color={"#dedede"}
          gutterBottom
        >
          {props.title}
        </Typography>
        <Typography component={"p"}>{props.description}</Typography>
      </CardContent>
    </Card>
  )
    
};

export default Certificado;
