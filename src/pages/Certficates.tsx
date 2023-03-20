import React, { useState } from "react";
import Card from "../components/Card";
import { sliderImgs } from "../models/slider-model";
import Slider from "../components/Slider";
import { Row } from "react-bootstrap";
import PageTransitionStyle from "./layout/PageTransitionStyle";

const CertficatesPage = () => {
  const [sliderImgs] = useState<sliderImgs>([
    {
      src: "/imgs/certificado_IbmecStars22_1.png",
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
    <PageTransitionStyle>
      <Card
        title="Programming Expert Certificate"
        alt="Certificado de Programação"
        src="/imgs/ProgrammingExpert_Certificate.png"
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
        <Slider
          sliderId="slider-ibmec-stars-22-1"
          cardTitle="Evento Ibmec Stars 22.1"
          cardText="Premiação dos top 4% melhores alunos do Ibmec no primeiro semestre de 2022."
          images={sliderImgs}
        />
      </Row>
    </PageTransitionStyle>
  );
};

export default CertficatesPage;
