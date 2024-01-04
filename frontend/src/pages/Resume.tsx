import { Container, Row, Col } from "react-bootstrap";
import PageTransitionStyle from "./layout/PageTransitionStyle";

function ResumePage() {
  return (
    <PageTransitionStyle>
      <Container className="my-5">
        <Row className="row justify-content-center vh-100">
          <embed
            className="col-10"
            type="application/pdf"
            src="pdf/resumo.pdf"
          ></embed>
        </Row>
      </Container>
    </PageTransitionStyle>
  );
}

export default ResumePage;
