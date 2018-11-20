import React from 'react'

import Layout from '../components/layout'
import FilmDisplay from '../components/filmDisplay'
import FilmDetails from '../components/filmDetails'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map((film, index) => {
      const movieTriggers = film.node.frontmatter.triggers.map(trigger => {
        const parsedTrigger = trigger.split('|')

        return {
          category: parsedTrigger[0],
          time: parsedTrigger[1],
          details: parsedTrigger[2],
        }
      })

      return (
        <div key={index}>
          <FilmDisplay
            imageSource={film.node.frontmatter.imageSource}
            title={film.node.frontmatter.title}
          />
          <FilmDetails
            title={film.node.frontmatter.title}
            duration={film.node.frontmatter.duration}
            description={film.node.rawMarkdownBody}
            category={film.node.frontmatter.category}
            time={film.node.frontmatter.time}
            details={film.node.frontmatter.details}
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
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
      edges {
        node {
          rawMarkdownBody
          frontmatter {
            title
            duration
            category
            time
            details
            imageSource
            triggers
          }
        }
      }
    }
  }
`
