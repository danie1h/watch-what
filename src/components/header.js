import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        display: 'flex',
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{
        margin: 0,
       }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{
        display: 'flex',
        justifyContents: 'flex-end',
        float: 'right',
      }}>
      <h3 style={{
        margin: '0 20px',
       }}>
        <Link
          to="/about/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          About
        </Link>
      </h3>
      <h3 style={{
        margin: '0 20px',
       }}>
        <Link
          to="/contact/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Contact
        </Link>
      </h3>
      </div>
    </div>
  </div>
)

export default Header
