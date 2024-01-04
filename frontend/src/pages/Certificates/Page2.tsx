import Card from "../../components/Card";

function Page2() {
  return (
    <>
      <Card
        title="Bootstrap Certificate"
        alt="Certificado de Bootstrapv5"
        src="certificates/certificado_bootstrap.jpg"
      >
        <p className="card-text">
          Certificado de conclusão do curso de Bootstrap oferecido pela{" "}
          <strong>Udemy</strong>.
        </p>
      </Card>
    </>
  );
}

export default Page2;
