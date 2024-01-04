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
      <Card
        title="Programming Expert Certificate"
        alt="Certificado de Programação"
        src="/certificates/ProgrammingExpert_Certificate.png"
      >
        <p className="card-text">
          Certificado de conclusão do curso de programação oferecido pela{" "}
          <strong>AlgoExpert.io</strong>. Saiba mais acessando o{" "}
          <a
            href="https://www.programmingexpert.io/product"
            target="_blank"
            title="ProgrammingExpert.io"
          >
            site
          </a>
          .
        </p>
      </Card>
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
