import React from 'react'

const showTriggers = (movieTriggers, duration) => {
  let currentPosition = 0 // tracks location of former triggers, if applicable
  return movieTriggers.map((trigger, index) => {
    const triggerPosition = (trigger.time / duration) * 100 - currentPosition
    currentPosition = triggerPosition
    return (
      <p
        key={index}
        className={trigger.category.toLowerCase().replace(/\s/g, '-')}
        style={{
          width: '5px',
          height: '2rem',
          borderRadius: '0 0 5px 5px',
          padding: '5px 2px',
          marginLeft: `${triggerPosition}%`,
        }}
      />
    )
  })
}

const TimelineBar = props => (
  <div
    className="timeline-bar"
    style={{
      margin: '1rem 0 0 0',
      padding: '1rem 0 2rem 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'hsl(0, 0%, 95%)',
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
        display: 'flex',
      }}
    >
      {showTriggers(props.movieTriggers, props.duration)}
    </div>
    <p style={{ color: 'hsl(0, 5%, 60%)', margin: 'auto 0' }}>
      {props.duration}
    </p>
  </div>
)

export default TimelineBar
