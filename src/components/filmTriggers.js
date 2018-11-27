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
          <p
            style={{
              marginTop: '.5rem',
              marginBottom: '0',
              color: 'hsl(0, 5%, 30%)',
            }}
          >
            <strong>Scene:</strong> {trigger.category}
          </p>
          <p
            style={{
              marginBottom: '0',
              color: 'hsl(0, 5%, 60%)',
            }}
          >
            @{trigger.time}
            min
          </p>
          <p
            style={{
              marginBottom: '.5rem',
              color: 'hsl(0, 5%, 30%)',
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
