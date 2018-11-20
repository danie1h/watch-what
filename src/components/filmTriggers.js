import React from 'react'

const FilmTriggers = props => (
  <div
    className="event-container"
    style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
      padding: '0 8vw',
    }}
  >
    <p
      style={{
        marginBottom: '0',
        color: 'hsl(0, 5%, 30%)',
      }}
    >
      <strong>Scene:</strong> {props.category}
    </p>
    <p
      style={{
        marginBottom: '0',
        color: 'hsl(0, 5%, 60%)',
      }}
    >
      @{props.time}
      min
    </p>
    <p
      style={{
        marginBottom: '0',
        color: 'hsl(0, 5%, 30%)',
        textAlign: 'justify ',
      }}
    >
      {props.details}
    </p>
  </div>
)

export default FilmTriggers
