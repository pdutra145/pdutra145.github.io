import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import StyledRow from "./layout/styledRow";
import useApi from "../hooks/useApi";
import { Certificate } from "../models/apiModels";

interface CardProps {
  // src: string;
  // alt: string;
  // title: string;
  // children: JSX.Element;
  certificate_id : number
}

const Card: React.FC<CardProps> = (props) => {
  const [certificateData, setCertificateData] = useState<Certificate>()
  const [imageSrc, setImageSrc] = useState<string>()

  const {fetchCertificate, fetchImage} = useApi()

  useEffect(() => {
    fetchCertificate(`certificates/${props.certificate_id}`, setCertificateData)
    fetchImage(`certificates/images/${props.certificate_id}`, setImageSrc)
  }, [fetchCertificate, fetchImage])

  if (!certificateData || !imageSrc) return <p>Nenhum certificado</p>

  return (
    <StyledRow className="justify-content-center">
      <Col lg={8}>
        <div className="card">
          <img
            src={imageSrc}
            className="card-img-top img-fluid"
            alt={certificateData.description}
          />
          <div className="card-body">
            <h3 className="card-title">{certificateData.title}</h3>
            {certificateData.description}
          </div>
        </div>
      </Col>
    </StyledRow>
  );
};

export default Card;
