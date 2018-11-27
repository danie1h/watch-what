import React from 'react'

import TimelineBar from './timelineBar'
import FilmSummary from './filmSummary'
import FilmTriggers from './filmTriggers'

const FilmDetails = props => (
  <div
    className={props.title + '-details'}
    style={{
      display: 'none',
      width: '100%',
      border: '1px solid rgb(184, 182, 182)',
      borderRadius: '5px',
      marginBottom: '0',
      padding: '1rem',
    }}
  >
    <FilmSummary
      title={props.title}
      duration={props.duration}
      description={props.description}
    />
    <TimelineBar
      duration={props.duration}
      movieTriggers={props.movieTriggers}
    />
    <FilmTriggers movieTriggers={props.movieTriggers} />
    <div
      style={{
        margin: '1rem 0 .5rem 0',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <button>Send Notification</button>
    </div>
  </div>
)

export default FilmDetails
