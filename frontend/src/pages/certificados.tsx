import React, { Key, useEffect, useState } from "react";
import RootLayout from "../components/layout/RootLayout";
import { Grid, Stack } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import Certificado from "../components/Certificado";
import { CertificateModel } from "../models/apiModels";
import useApi from "../hooks/useApi";
import axios from "axios";

const fetchCertificates = async () => {
  const apiHost = process.env.REACT_APP_API_HOST; // Make sure this is correctly set
  const query = {
    query: `
    query  {
      certificates {
        id
        description
        title
      }
    }`,
  };

  try {
    const response = await axios.post(`http://localhost:5000/graphql`, query);

    if (response.status === 200) {
      const certificates = response.data.data.certificates;

      for (const certificate of certificates) {
        const imageRes = await axios.get(`http://localhost:5000/image/${certificate.id}`, {
          responseType: "blob",
        });
        if (imageRes.status === 200) {
          // const blob = new Blob([imageRes.data], { type: 'image/jpeg' }); // Adjust the type as necessary
          certificate["image"] = URL.createObjectURL(imageRes.data);
        }
      }

      return certificates;
    }
  } catch (error) {
    console.error("Error fetching certificate:", error);
    return null; // Or handle the error as per your application's needs
  }
};

const CertificadosPage = () => {
  const [certificates, setCertificates] = useState<
    CertificateModel[] | undefined
  >();

  useEffect(() => {
    const func = async () => {
      const certificates = await fetchCertificates();

      setCertificates(certificates);
    };

    func();
  }, []);

  return (
    <RootLayout>
      <Grid container justifyContent={"center"} gap={5} alignItems={"center"} spacing={5} padding={'1rem'}>
        {certificates &&
          certificates.map((certificate) => (
            <Grid item xs={4}>
              <Certificado
                certificate_id={certificate.id}
                imageSrc={certificate.image}
                title={certificate.title}
                description={certificate.description}
              />
            </Grid>
          ))}
      </Grid>
    </RootLayout>
  );
};

export default CertificadosPage;
