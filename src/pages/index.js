import React from 'react'

import Layout from '../components/layout'
import FilmDisplay from '../components/filmDisplay'
import FilmDetails from '../components/filmDetails'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => (
  <Layout>
    {data.allFilmNode.edges.map((film, index) => {
      if (film.node.filmIdJoin === null) {
        return null
      }

      const movieTriggers = film.node.filmIdJoin.frontmatter.triggers.map(
        trigger => {
          const parsedTrigger = trigger.split('|')

          return {
            category: parsedTrigger[0],
            time: parsedTrigger[1],
            details: parsedTrigger[2],
          }
        }
      )

      return (
        <div key={film.node.filmId}>
          <FilmDisplay
            imageSource={film.node.backdropImage.childImageSharp.fluid}
            title={film.node.title}
          />
          <FilmDetails
            title={film.node.title}
            duration={film.node.filmIdJoin.frontmatter.duration}
            description={film.node.overview}
            movieTriggers={movieTriggers}
          />
        </div>
      )
    })}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allFilmNode(sort: { fields: title, order: ASC }) {
      edges {
        node {
          filmId
          filmIdJoin {
            frontmatter {
              duration
              triggers
            }
          }
          title
          overview
          backdropImage: image {
            childImageSharp {
              fluid(maxWidth: 960, jpegProgressive: true, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
