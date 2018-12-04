import React from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'

const GuidelinesPage = ({ data }) => (
  <Layout>
    <div style={{ color: 'hsl(202, 35%, 30%)' }}>
      <h1>Guidelines</h1>
      <p>
        We've formulated a set of guidelines to constitue which scenes are
        reported as film triggers.
      </p>
    </div>
    <div
      style={{ color: 'hsl(202, 35%, 30%)' }}
      dangerouslySetInnerHTML={{ __html: data.file.childMarkdownRemark.html }}
    />
  </Layout>
)

export default GuidelinesPage

export const query = graphql`
  query {
    file(relativePath: { regex: "/guidelines.md/" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`
