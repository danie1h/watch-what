import React from 'react'

const TimelineBar = props => (
  <div
    className="timeline-bar"
    style={{
      margin: '1rem 0 2rem 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <p
      style={{
        position: 'inline',
        color: 'hsl(0, 5%, 60%)',
        margin: 'auto 0',
      }}
    >
      0
    </p>
    <div
      style={{
        width: '70%',
        height: '10px',
        border: '1px solid hsl(0, 5%, 60%)',
        borderRadius: '10px',
        paddingBottom: '1rem',
        margin: '0 .5rem 0 .5rem',
      }}
    >
      <p
        style={{
          position: 'absolute',
          left: '50%',
          backgroundColor: 'hsl(30, 100%, 47%)',
          width: '5px',
          height: '2rem',
          borderRadius: '0 0 5px 5px',
          padding: '5px 2px',
        }}
      />
      <p
        style={{
          position: 'absolute',
          left: '35%',
          backgroundColor: 'hsl(30, 100%, 57%)',
          width: '5px',
          height: '2rem',
          borderRadius: '0 0 5px 5px',
          padding: '5px 2px',
        }}
      />
      <p
        style={{
          position: 'absolute',
          left: '65%',
          backgroundColor: 'hsl(40, 80%, 67%)',
          width: '5px',
          height: '2rem',
          borderRadius: '0 0 5px 5px',
          padding: '5px 2px',
        }}
      />
    </div>
    <p style={{ color: 'hsl(0, 5%, 60%)', margin: 'auto 0' }}>
      {props.duration}
    </p>
  </div>
)

export default TimelineBar
