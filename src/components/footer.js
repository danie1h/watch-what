import React from 'react'

import instagramIcon from '../images/instagram-icon.png'
import facebookIcon from '../images/facebook-icon.png'
import twitterIcon from '../images/twitter-icon.png'

const Footer = ({ siteTitle }) => (
  <div
    className="footer-container"
    style={{
      background: 'hsl(202, 35%, 30%)',
      marginBottom: '0',
      boxShadow: '0px 1px 10px hsl(202, 35%, 20%)',
    }}
  >
    <div
      className="footer-contents"
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '.2rem 1.0875rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ margin: 'auto 0 ' }}>
        <p
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: '0',
          }}
        >
          © 2018 {siteTitle}, Inc.
        </p>
        <p
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: '0',
          }}
        >
          All rights reserved.
        </p>
      </div>
      <div style={{ margin: '1rem 0 .5rem 0' }}>
        <a href="https://www.twitter.com">
          <img
            className="footer-icon"
            style={{ margin: '.5rem 1rem', width: '24px' }}
            src={twitterIcon}
            alt="twitter icon"
          />
        </a>
        <a href="https://www.facebook.com">
          <img
            className="footer-icon"
            style={{ margin: '.5rem 1rem', width: '24px' }}
            src={facebookIcon}
            alt="facebook icon"
          />
        </a>
        <a href="https://www.instagram.com">
          <img
            className="footer-icon"
            style={{ margin: '.5rem 1rem', width: '24px' }}
            src={instagramIcon}
            alt="instagram icon"
          />
        </a>
      </div>
    </div>
  </div>
)

export default Footer
