import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const LogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        logoImage: file(relativePath: { regex: "/watch-what-icon.png/" }) {
          childImageSharp {
            fixed(width: 36, height: 36) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fixed={data.logoImage.childImageSharp.fixed}
        style={{
          marginBottom: 0,
          display: 'block',
        }}
        alt="Watch What brand icon"
      />
    )}
  />
)
export default LogoImage
