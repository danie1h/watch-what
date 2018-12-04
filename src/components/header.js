import React from 'react'
import { Link } from 'gatsby'

import LogoIcon from './logoImage'

const Header = ({ siteTitle }) => (
  <div
    className="header-container"
    style={{
      background: 'hsl(202, 35%, 30%)',
      marginBottom: '1.45rem',
      boxShadow: '0px 1px 10px hsl(202, 35%, 20%)',
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
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link to="/" style={{}}>
          <LogoIcon />
        </Link>
        <Link
          to="/"
          style={{
            color: 'hsl(168, 59%, 47%)',
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
          color: 'hsl(168, 59%, 47%)',
          fontSize: '200%',
          padding: '.5rem',
        }}
      >
        &#9776;
      </label>
      <input type="checkbox" id="toggle" style={{ display: 'none' }} />
      <div className="navbar-contents">
        <Link
          to="/about/"
          style={{
            color: 'hsl(168, 59%, 47%)',
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
            color: 'hsl(168, 59%, 47%)',
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
        <Link
          to="/resources/"
          style={{
            color: 'hsl(168, 59%, 47%)',
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
            Resources
          </h3>
        </Link>
        <Link
          to="/guidelines/"
          style={{
            color: 'hsl(168, 59%, 47%)',
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
            Guidelines
          </h3>
        </Link>
      </div>
    </div>
  </div>
)

export default Header
