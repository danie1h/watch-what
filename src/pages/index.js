import React from 'react'

import Layout from '../components/layout'
import Film from '../components/film'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map((film, index) => {
      return (
        <Film
          key={index}
          title={film.node.frontmatter.title}
          duration={film.node.frontmatter.duration}
          description={film.node.rawMarkdownBody}
          imageSource={film.node.frontmatter.imageSource}
          category={film.node.frontmatter.category}
          time={film.node.frontmatter.time}
          details={film.node.frontmatter.details}
        />
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
          }
        }
      }
    }
  }
`
