import React from 'react'

import Layout from '../components/layout'
import tmdbLogo from '../images/tmdb.png'

const AboutPage = () => (
  <Layout>
    <h1 style={{ textAlign: 'center', color: 'hsl(217, 41%, 35%)' }}>
      A Little Insight into Our Team...
    </h1>
    <p>We're a group of individuals with the aspirations to...</p>
    <p>Our Mission....</p>
    <img
      src={tmdbLogo}
      alt="Powered by The movie Database"
      style={{ width: '128px' }}
    />
    <p>
      This product uses the TMDb API but is not endorsed or certified by TMDb.
    </p>
  </Layout>
)

export default AboutPage
