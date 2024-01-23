import React, { Key } from 'react'
import HomeRow from './Row'
import { styled } from '@mui/material';
import { useStaticQuery, graphql } from 'gatsby';
import { Introduction } from '../../models/apiModels';

const HomeStyledUl = styled("ul")({
    "& li": {
      textAlign: "justify",
      lineHeight: "2.5rem",
    },
  });

const Economia = () => {
    
  const economicsData = useStaticQuery(graphql`query {
    flask {
      intro(title:"Economia 📈") {
        date
        text
        id
        lastUpdated
        title
      }
    }
  }`)
  return (
    <HomeRow title="Economia 📈" id="economics">
        <HomeStyledUl>
          {economicsData &&
            economicsData.flask.intro.map((record:Introduction, index:Key) => (
              <li key={index}>{record.text}</li>
            ))}
        </HomeStyledUl>
      </HomeRow>
  )
}

export default Economia