import { useContext } from "react";
import HomeRow from "../components/Home/Row";
import { Grid, Typography } from "@mui/material";
import { LoadingContext } from "../context/Loading";
import Loader from "../components/Loader";
import React from "react";
import RootLayout from "../components/layout/RootLayout";
import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.css'
import HomeUL from "../components/Home/HomeUl";
import { graphql, useStaticQuery } from "gatsby";
import Test from '../components/Test.mdx'

const HomePage = () => {
  const { isLoading } = useContext(LoadingContext);

  const data = useStaticQuery(graphql`
  query {
    programacao: flask {
      intro(title: "Programação 🤖") {
        date
        text
        id
        lastUpdated
        title
      }
    }
    economia: flask {
      intro(title: "Economia 📈") {
        date
        text
        id
        lastUpdated
        title
      }
    }
  }
  `)

  if (isLoading) return <Loader />;

  return (
    <RootLayout>
      <HomeRow id="brief-intro" title="Sobre Mim">
        <Grid xs={12} marginX={{ xs: 2 }} md={10}>
            <Typography
              component={"p"}
              textAlign={"justify"}
              lineHeight={"2.5rem"}
              fontSize={"1.25rem"}
            >
              &emsp;&emsp;Meu nome é Pedro Pacheco de Mello Dutra nasci no dia 12
              de junho de 2003 na cidade de São Paulo. Sou estudante de Ciências
              Econômicas no IBMEC SP e me formei em uma escola bilíngue chamada
              OLM no Rio de Janeiro. Adoro fazer exercício físico, estudar, e
              passar tempo com minha família. Decidi cursar a faculdade de
              economia porque gosto de matematica e estatística e por influência
              familiar.
              <br />
              <br />
              &emsp;&emsp;Ademais, sou apaixonado por programação. Certamente, eu
              tive uma forte influencia dos meus tios. Um deles é arquiteto de
              sistemas e trabalha com Java a mais de 20 anos e o outro se
              especializou mais no front-end apesar de ter um conhecimento vasto
              em outras áreas de TI. Com 16 anos fiz o meu primeiro curso de
              programação, no qual programei algorítmos simples em Portugol para
              entender a lógica básica de programação. Com 17 anos, voltei ao
              mundo da programação quando comecei a acompanhar diversos canais no
              Youtube (Clemete Mihaeliscu, Tech with Tim, CS Dojo, etc.) que me
              inspiraram e me ajudaram a enxergar o poder da computação. Foi a
              partir daí que fiz vários cursos de programação na Udemy,
              AlgoExpert, e CodeAcademy que me deram a base para trabalhar em
              vários projetos pessoais de portfolio. Também já contribui para
              alguns projetos de código aberto no{" "}
              <a
                // rel="noopener"
                href="https://github.com/pdutra145"
                target="_blank"
              >
                Github&ensp;
              </a>
              e contínuo procurando maneiras de contribuir. O projeto que eu mais
              me orgulho foi um app de linha de comando que desenvolvi com nodejs,
              shell scripting, e docker-compose para facilitar a criação de
              contêineres com servidores SQL. Por fim, quero trabalhar com
              profissionais competentes que me forneçam a base para ter uma
              excelente carreira e continuar evoluindo na minha vida acadêmica.
            </Typography>
          {/* <Test /> */}
        </Grid>
        <HomeUL data={data.programacao.intro} title='Programação 🤖' id='programacao' />
        <HomeUL data={data.economia.intro} title='Economia 📈' id='economia' />
      </HomeRow>


    </RootLayout>
  );
};

export const Head: React.FC = () => <title>Personal Website</title>;

export default HomePage;
