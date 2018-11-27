import React from 'react'

const FilmSummary = props => (
  <div style={{ marginTop: '1rem' }}>
    <h2
      style={{
        marginBottom: 0,
      }}
    >
      {props.title}
    </h2>
    <p
      style={{
        marginBottom: '1rem',
        color: 'hsl(0, 5%, 45%)',
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
