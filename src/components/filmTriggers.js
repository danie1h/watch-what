import React from 'react'

const FilmTriggers = props => (
  <div
    className="event-container"
    style={{
      backgroundColor: 'hsl(0, 0%, 95%)',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
      padding: '0 8vw',
    }}
  >
    {props.movieTriggers.map((trigger, index) => {
      return (
        <div key={index}>
          <h3
            style={{
              marginTop: '.5rem',
              marginBottom: '0',
              color: 'hsl(0, 5%, 25%)',
            }}
          >
            {trigger.category} Scene
          </h3>
          <p
            style={{
              marginBottom: '1rem',
              color: 'hsl(0, 5%, 45%)',
            }}
          >
            at {trigger.time} min
          </p>
          <p
            style={{
              marginBottom: '1rem',
              color: 'hsl(0, 5%, 25%)',
              textIndent: '1rem',
              textAlign: 'justify ',
            }}
          >
            {trigger.details}
          </p>
        </div>
      )
    })}
  </div>
)

export default FilmTriggers
