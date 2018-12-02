import React from 'react'
import Img from 'gatsby-image'

import dropDownArrow from '../images/down-arrow.png'

const FilmDisplay = props => (
  <div
    className="film-container"
    style={{
      position: 'relative',
    }}
  >
    <Img
      fluid={props.imageSource}
      alt="sample img"
      style={{
        objectFit: 'fill',
        boxShadow: '0 3px 5px hsl(0, 0%, 20%)',
        borderRadius: '5px',
        marginBottom: '0',
      }}
    />
    <h5
      style={{
        position: 'absolute',
        top: '5px',
        right: '5px',
        padding: '.5rem',
        borderRadius: '5px',
        color: 'hsl(0, 0%, 100%)',
        backgroundColor: 'hsl(202, 15%, 25%)',
        opacity: '.75',
      }}
    >
      {props.title}
    </h5>
    <button
      className="dropdown-arrow-btn"
      onClick={event => {
        // display or hide film details on click
        // update classname to apply transitions to the button
        const itemClicked = document.getElementsByClassName(
          props.title + '-details'
        )[0]
        if (itemClicked.className.includes('deactivate-details')) {
          itemClicked.className = props.title + '-details activate-details'
          event.target.className = 'dropdown-arrow-btn-active'
        } else {
          itemClicked.className = props.title + '-details deactivate-details'
          event.target.className = 'dropdown-arrow-btn'
        }
      }}
      style={{
        position: 'absolute',
        borderRadius: '5px',
        display: 'flex',
      }}
    >
      <img
        className="dropdown-arrow"
        src={dropDownArrow}
        style={{
          margin: '0 auto',
          pointerEvents: 'none',
        }}
        alt="dropdown arrow"
      />
    </button>
  </div>
)

export default FilmDisplay
