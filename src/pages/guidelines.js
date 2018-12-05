import React from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'

const GuidelinesPage = ({ data }) => (
  <Layout>
    <div
      style={{
        color: 'hsl(217, 41%, 23%)',
        backgroundColor: 'hsl(168, 59%, 85%)',
        padding: '3rem 1.5rem',
        fontSize: '1.25em',
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
        color: 'hsl(217, 41%, 23%)',
        fontSize: '1.25em',
        padding: '3rem 3rem',
        backgroundColor: 'hsl(168, 59%, 95%)',
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
