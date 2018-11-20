import React from 'react'

import FilmDisplay from './filmDisplay'
import FilmDetails from './filmDetails'

const Film = props => (
  <div>
    <FilmDisplay imageSource={props.imageSource} title={props.title} />
    <FilmDetails
      title={props.title}
      duration={props.duration}
      description={props.description}
      category={props.category}
      time={props.time}
      details={props.details}
    />
  </div>
)

export default Film
