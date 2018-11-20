import React from 'react'

const FilmSummary = props => (
  <div>
    <h1
      style={{
        marginBottom: 0,
      }}
    >
      {props.title}
    </h1>
    <p
      style={{
        marginBottom: '1rem',
        color: 'hsl(0, 5%, 60%)',
      }}
    >
      {props.duration}
      min
    </p>
    <p
      style={{
        marginBottom: 0,
        textIndent: '1rem',
        fontStyle: 'italic',
        textAlign: 'justify',
      }}
    >
      {props.description}
    </p>
  </div>
)

export default FilmSummary
