import React from 'react'
import { Link } from 'gatsby'

import brandIcon from '../images/watch-what-icon.png'

const Header = ({ siteTitle }) => (
  <div
    className="header-container"
    style={{
      background: 'hsl(152, 30%, 90%)',
      marginBottom: '1.45rem',
      boxShadow: '0px 1px 5px hsl(152, 30%, 50%)',
    }}
  >
    <div
      className="header-contents"
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '.2rem 1.0875rem',
        display: 'flex',
      }}
    >
      <div
        className="navbar-brand"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link to="/" style={{}}>
          <img
            src={brandIcon}
            width="36px"
            alt="Watch What brand icon"
            style={{
              marginBottom: 0,
              display: 'block',
            }}
          />
        </Link>
        <Link
          to="/"
          style={{
            color: '#31C0A4',
            textDecoration: 'none',
          }}
        >
          <h1
            style={{
              margin: '0 1rem',
            }}
          >
            {siteTitle}
          </h1>
        </Link>
      </div>
      <label
        for="toggle"
        className="toggle-item"
        style={{
          color: '#31C0A4',
          fontSize: '200%',
          padding: '.5rem',
          justifySelf: 'flex-end',
        }}
      >
        &#9776;
      </label>
      <input type="checkbox" id="toggle" style={{ display: 'none' }} />
      <div className="navbar-contents">
        <Link
          to="/about/"
          style={{
            color: '#31C0A4',
            textDecoration: 'none',
          }}
        >
          <h3
            className="nav-item"
            style={{
              margin: '0',
              padding: '1rem',
            }}
          >
            About
          </h3>
        </Link>
        <Link
          to="/contact/"
          style={{
            color: '#31C0A4',
            textDecoration: 'none',
          }}
        >
          <h3
            className="nav-item"
            style={{
              margin: 'auto',
              padding: '1rem',
            }}
          >
            Contact
          </h3>
        </Link>
      </div>
    </div>
  </div>
)

export default Header
