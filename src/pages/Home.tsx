import React from "react";
import HomeRow from "../components/Home/Row";
import PageTransitionStyle from "./layout/PageTransitionStyle";
import styled from "styled-components";

const HomeStyledUl = styled.ul`
  & li {
    text-align: justify;
    line-height: 2.5rem;
  }
`;

const HomePage = () => {
  return (
    <PageTransitionStyle>
      <HomeRow id="brief-intro" title="Breve Descrição">
        <p>
          &emsp;&emsp;Meu nome é Pedro Pacheco de Mello Dutra nasci no dia 12 de
          junho de 2003 na cidade de São Paulo. Sou estudante de Ciências
          Econômicas no IBMEC SP e me formei em uma escola chamada OLM no Rio de
          Janeiro. Adoro fazer exercício físico, estudar, e passar tempo com
          minha família.
        </p>
      </HomeRow>

      <HomeRow title="Programação" id="coding">
        <HomeStyledUl>
          <li>
            Comecei a estudar programação e ciências computacionais com 15 anos
            de idade.
          </li>
          <li>Atualmente tenho conhecimento de JavaScript e Python</li>
          <li>Projetos com bibliotecas: pygame, pandas, math, time, etc.</li>
          <li>
            Montei jogos 2D simplês como Snake, Space Invaders, Connect Four,
            Flappy Bird, etc. (acesse meu{" "}
            <a
              href="https://github.com/pdutra145"
              target="_blank"
              title="Github"
            >
              GitHub
            </a>{" "}
            para saber mais)
          </li>
          <li>
            Atualmente estudando C++, HTML, CSS, JavaScript, e bibliotecas e
            frameworks dessas linguagens.
          </li>
          <li>Montei esse Site com Bootstrap 5.</li>
          <li>Buscando aprender mais sobre o assunto</li>
        </HomeStyledUl>
      </HomeRow>

      <HomeRow title="Economia" id="economics">
        <HomeStyledUl>
          <li>
            Comecei a me interessar por economia e finanças com 16 anos de
            idade.
          </li>
          <li>
            Estudei livros de notáveis escritores como Milton Friedman,
            Friedrick Hayek, Ludwig Von Mises, Ray Dalio, Thiago Nigro, Yuval
            Noah Harrari, etc.
          </li>
          <li>Estudante de Economia no IBMEC SP.</li>
          <li>Buscando aprender mais sobre o assunto.</li>
        </HomeStyledUl>
      </HomeRow>
    </PageTransitionStyle>
  );
};

export default HomePage;
