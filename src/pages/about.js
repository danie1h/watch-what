import React from 'react'

import Layout from '../components/layout'
import Profile from '../components/profile'
import tmdbLogo from '../images/tmdb.png'
import sgProfileImg from '../images/sg_profile.jpg'
import dhProfileImg from '../images/dh_profile.jpg'

const AboutPage = () => (
  <Layout>
    <div className="about-container">
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            color: 'hsl(217, 41%, 35%)',
            fontSize: '3em',
          }}
        >
          Mission
        </h2>
        <p
          style={{
            fontSize: '2.5em',
            color: 'hsl(0, 0%, 35%)',
            textAlign: 'justify',
            padding: '0 1rem',
          }}
        >
          Our Mission Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc ac leo velit. Phasellus sit amet nisi rutrum, varius augue ac,
          scelerisque ipsum. Proin dapibus et enim sit amet auctor. Morbi nulla
          purus, cursus sit amet ligula congue, mattis condimentum ex. Morbi
          sodales sapien ornare tellus sollicitudin, nec condimentum massa
          interdum. In nec mi in purus tempus consequat et eget quam. Cras
          eleifend eget enim at porta. Aliquam auctor metus accumsan nibh
          aliquet, porttitor vulputate justo lacinia.{' '}
        </p>
      </div>
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: 'hsl(0,0%,90%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h2 style={{ color: 'hsl(217, 41%, 35%)', fontSize: '3em' }}>
          Who We Are
        </h2>
        <Profile
          profileImg={sgProfileImg}
          personName="Savanna George"
          info="Aenean cursus imperdiet nunc porttitor sodales. Nulla facilisi. Phasellus tincidunt eros est, quis tincidunt urna aliquet ac. Vivamus rutrum ligula id ultricies sagittis. Vestibulum velit diam, mollis sed posuere sit amet, posuere id tellus."
        />
        <Profile
          profileImg={dhProfileImg}
          personName="Daniel Humphreys"
          info="Aenean cursus imperdiet nunc porttitor sodales. Nulla facilisi. Phasellus tincidunt eros est, quis tincidunt urna aliquet ac. Vivamus rutrum ligula id ultricies sagittis. Vestibulum velit diam, mollis sed posuere sit amet, posuere id tellus."
        />
      </div>
      <div
        style={{
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={tmdbLogo}
          alt="Powered by The movie Database"
          style={{ width: '128px' }}
        />
        <p
          style={{
            fontSize: '1.5em',
            color: 'hsl(0, 0%, 35%)',
            padding: '1rem',
          }}
        >
          This product uses the TMDb API but is not endorsed or certified by
          TMDb.
        </p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
