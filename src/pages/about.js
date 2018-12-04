import React from 'react'

import Layout from '../components/layout'
import Profile from '../components/profile'
import tmdbLogo from '../images/tmdb.png'
import sgProfileImg from '../images/sg_profile.jpg'
import dhProfileImg from '../images/dh_profile.jpg'
import missionIcon from '../images/mission-icon.svg'
import connectedIcon from '../images/connected-icon.svg'

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
          backgroundColor: 'hsl(168, 59%, 90%)',
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
        <img src={missionIcon} alt="mission concepts" />
        <p
          style={{
            fontSize: '2.5em',
            color: 'hsl(217, 15%, 30%)',
            padding: '1rem',
            textAlign: 'center',
          }}
        >
          We illuminate awareness for film viewers to prepare for or avoid
          intrusive thoughts
        </p>
      </div>
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: 'hsl(168, 59%, 85%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
        }}
      >
        <h2
          style={{
            color: 'hsl(217, 41%, 35%)',
            fontSize: '3em',
          }}
        >
          Our Team
        </h2>
        <div
          className="about-profile-container"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
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
      </div>
      <div
        className="contact-container"
        style={{
          backgroundColor: 'hsl(168, 59%, 90%)',
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '50%',
            backgroundColor: 'hsl(217, 41%, 35%)',
            padding: '1rem',
            borderRadius: '24px 0 0 24px',
            color: 'hsl(217, 41%, 95%)',
          }}
        >
          <h2 style={{ fontSize: '3em' }}>Contact Us</h2>
          <hr style={{ backgroundColor: 'hsl(217, 41%, 65%)' }} />
          <p style={{ fontSize: '1.5em' }}>
            <strong>Email:</strong>{' '}
            <a
              style={{ color: 'hsl(217, 41%, 95%)' }}
              href="mailto:team@watchwhat.com"
            >
              team@watchwhat.com
            </a>
          </p>
          <p style={{ fontSize: '1.5em' }}>
            <strong>Phone:</strong> (555) 555-5555
          </p>
        </div>
        <div style={{ width: '50%', padding: '5%' }}>
          <img src={connectedIcon} alt="connect with us" />
        </div>
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
            textAlign: 'center',
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
