import React from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'

const GuidelinesPage = ({ data }) => (
  <Layout>
    <div
      style={{
        color: 'hsl(202, 35%, 20%)',
        backgroundColor: 'hsl(202, 25%, 90%)',
        padding: '1rem',
      }}
    >
      <h1>Guidelines</h1>
      <p style={{ margin: 0 }}>
        We've formulated a set of standards to constitue which scenes should be
        reported as film triggers.
      </p>
    </div>
    <div
      style={{
        color: 'hsl(202, 35%, 20%)',
        padding: '1rem',
        backgroundColor: 'hsl(202, 25%, 95%)',
      }}
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
