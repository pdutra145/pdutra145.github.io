import Certificate from "../../components/Certificate";
import { sliderImgs } from "../../models/slider-model";
import Slider from "../../components/Slider";
import { useContext, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import { LoadingContext } from "../../context/Loading";
import { CertificateModel } from "../../models/apiModels";
import useApi from "../../hooks/useApi";
import Loader from "../../components/Loader";


function CertificatePage() {
  const [sliderImgs] = useState<sliderImgs>([
    {
      src: "/certificates/certificado_IbmecStars22_1.png",
      active: true,
      alt: "Certificado",
      id: 1,
    },
    {
      src: "/imgs/foto_grupo.jpeg",
      active: false,
      alt: "Foto em Grupo",
      id: 2,
    },
    {
      src: "/imgs/foto_individual.jpeg",
      active: false,
      alt: "Foto Individual",
      id: 3,
    },
  ]);

  const [certificateData, setCertificateData] = useState<
    CertificateModel[] | undefined
  >();

  const { fetchCertificate } = useApi();
  const { isLoading } = useContext(LoadingContext);

  useEffect(() => {
    fetchCertificate([1, 2], setCertificateData);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <Stack rowGap={5}>
      <Grid container justifyContent={"center"} alignItems={"center"} spacing={5} gap={5}>
        {certificateData &&
          certificateData.map((el, idx) => (
            <Grid xs={12} lg={5}>
              <Certificate
                certificate_id={el.id}
                imageSrc={el.image}
                title={el.title}
                description={el.description}
              />
            </Grid>
          ))}
      </Grid>

      <Slider
        sliderId="slider-ibmec-stars-22-1"
        cardTitle="Evento Ibmec Stars 22.1"
        cardText="Premiação dos top 4% melhores alunos do Ibmec no primeiro semestre de 2022."
        images={sliderImgs}
      />
    </Stack>
  );
}

export default CertificatePage;
