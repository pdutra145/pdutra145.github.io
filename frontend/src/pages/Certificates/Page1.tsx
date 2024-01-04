import Card from "../../components/Card";
import { Row, Col } from "react-bootstrap";
import { sliderImgs } from "../../models/slider-model";
import Slider from "../../components/Slider";
import { useState } from "react";

function Page1() {
  const [sliderImgs] = useState<sliderImgs>([
    {
      src: "/certificates/certificado_IbmecStars22_1.png",
      active: true,
      alt: "Certificado",
    },
    {
      src: "/imgs/foto_grupo.jpeg",
      active: false,
      alt: "Foto em Grupo",
    },
    {
      src: "/imgs/foto_individual.jpeg",
      active: false,
      alt: "Foto Individual",
    },
  ]);

  return (
    <>
      <Card certificate_id={2}/>
      <Row className="justify-content-center">
        <Col md={8}>
          <Slider
            sliderId="slider-ibmec-stars-22-1"
            cardTitle="Evento Ibmec Stars 22.1"
            cardText="Premiação dos top 4% melhores alunos do Ibmec no primeiro semestre de 2022."
            images={sliderImgs}
          />
        </Col>
      </Row>
    </>
  );
}

export default Page1;
