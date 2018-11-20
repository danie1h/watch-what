import React from 'react'

const Film = props => (
  <div>
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
    <div
      className={props.title + '-details'}
      style={{
        display: 'none',
        width: '100%',
        border: '1px solid rgb(184, 182, 182)',
        borderRadius: '5px',
        marginBottom: '1.25rem',
        padding: '1rem',
      }}
    >
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
      <p>
        ********Orange symbols below will have 3 different hues representing
        different scene categories. WIP a mathematical solution to adjust
        position based on total duration and scene time.********
      </p>
      <div
        style={{
          width: '70%',
          height: '10px',
          border: '1px solid rgb(184, 182, 182)',
          borderRadius: '5px',
          margin: '1.25rem auto',
          paddingBottom: '1rem',
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
          @ {props.time} min
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
        <button
          style={{
            margin: '.5rem auto',
          }}
        >
          Send Notification
        </button>
      </div>
    </div>
  </div>
)

export default Film
