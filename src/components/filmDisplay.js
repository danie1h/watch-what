import React from 'react'

import dropDownArrow from '../images/down-arrow.png'

const FilmDisplay = props => (
  <div
    className="film-container"
    style={{
      position: 'relative',
      width: '100%',
      display: 'flex',
    }}
  >
    <img
      src={props.imageSource}
      alt="sample img"
      style={{
        boxShadow: '0 3px 5px hsl(0, 0%, 20%)',
        borderRadius: '5px',
      }}
    />
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
        bottom: '4%',
        right: '2%',
        borderRadius: '5px',
        display: 'flex',
      }}
    >
      <img
        className="dropdown-arrow"
        src={dropDownArrow}
        style={{
          margin: '0 auto',
        }}
        alt="dropdown arrow"
      />
    </button>
  </div>
)

export default FilmDisplay
