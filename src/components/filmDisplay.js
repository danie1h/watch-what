import React from 'react'

const FilmDisplay = props => (
  <div
    className="film-container"
    style={{
      display: 'flex',
    }}
  >
    <img
      src={props.imageSource}
      alt="sample img"
      style={{
        width: '100%',
        margin: 0,
        boxShadow: '0 3px 5px hsl(138, 30%, 35%)',
        borderRadius: '5px 0 0 5px',
      }}
    />
    <button
      onClick={() => {
        document.getElementsByClassName(props.title + '-details')[0].style
          .display === 'none'
          ? (document.getElementsByClassName(
              props.title + '-details'
            )[0].style.display = 'block')
          : (document.getElementsByClassName(
              props.title + '-details'
            )[0].style.display = 'none')
      }}
      style={{
        position: 'relative',
        textAlign: 'center',
        borderRadius: '0 5px 5px 0',
        borderBottom: '1px solid white',
      }}
    >
      View Details
    </button>
  </div>
)

export default FilmDisplay
