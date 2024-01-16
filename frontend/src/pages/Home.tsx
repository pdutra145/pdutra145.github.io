import { useContext, useEffect, useState } from "react";
import HomeRow from "../components/Home/Row";
import { SobreMim } from "../models/apiModels";
import PageTransitionStyle from "./layout/PageTransitionStyle";
import styled from "styled-components";
import useApi from "../hooks/useApi";
import { Grid, Typography } from "@mui/material";
import { LoadingContext } from "../context/Loading";
import Loader from "../components/Loader";

const HomeStyledUl = styled.ul`
  & li {
    text-align: justify;
    line-height: 2.5rem;
  }
`;

const HomePage = () => {
  const { fetchIntroduction } = useApi();
  const [programacaoData, setProgramacaoData] = useState<SobreMim[]>();
  const [economicsData, setEconomicsData] = useState<SobreMim[]>();

  const {isLoading} = useContext(LoadingContext)


  useEffect(() => {
    fetchIntroduction("introduction/programming", setProgramacaoData);
    fetchIntroduction("introduction/economics", setEconomicsData);
  }, [fetchIntroduction]);


  if (isLoading) return <Loader />

  return (
    <PageTransitionStyle>
      <HomeRow id="brief-intro" title="Sobre Mim">
        {/* <Typography>{data.text}</Typography> */}
        <Grid xs={12} marginX={{xs:2}} md={10}>
          <Typography component={'p'} textAlign={'justify'} lineHeight={'2.5rem'} fontSize={'1.25rem'}>
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
            <a href="https://github.com/pdutra145" target="_blank">
              Github&ensp;
            </a>
            e contínuo procurando maneiras de contribuir. O projeto que eu mais
            me orgulho foi um app de linha de comando que desenvolvi com nodejs,
            shell scripting, e docker-compose para facilitar a criação de
            contêineres com servidores SQL. Por fim, quero trabalhar com
            profissionais competentes que me forneçam a base para ter uma
            excelente carreira e continuar evoluindo na minha vida acadêmica.
          </Typography>
        </Grid>
      </HomeRow>

      <HomeRow title="Programação 🤖" id="coding">
        <HomeStyledUl>
          {programacaoData &&
            programacaoData.map((record, index) => (
              <li key={index}>{record.text}</li>
            ))}
        </HomeStyledUl>
      </HomeRow>

      <HomeRow title="Economia 📈" id="economics">
        <HomeStyledUl>
          {economicsData &&
            economicsData.map((record, index) => (
              <li key={index}>{record.text}</li>
            ))}
        </HomeStyledUl>
      </HomeRow>
    </PageTransitionStyle>
  );
};

export default HomePage;
