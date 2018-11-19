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
          borderRadius: 0,
          borderBottom: '1px solid black',
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
      <div
        style={{
          width: '70%',
          height: '10px',
          border: '1px solid rgb(184, 182, 182)',
          borderRadius: '5px',
          margin: '1.25rem auto',
          padding: '1rem',
        }}
      >
        <p
          style={{
            backgroundColor: 'red',
            borderRadius: '5px',
            padding: '5px 2px',
            color: 'black',
            float: 'right',
            transform: 'rotate(90deg)',
          }}
        >
          {props.time}
        </p>
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
        <p style={{ marginTop: '1.5rem' }}>Event(s)</p>
        <p
          style={{
            marginBottom: '0',
            color: 'hsl(0, 5%, 60%)',
          }}
        >
          {props.time} min
        </p>
        <p
          style={{
            marginBottom: '0',
            color: 'hsl(0, 5%, 30%)',
          }}
        >
          <strong>Category:</strong> {props.category}
        </p>
        <p
          style={{
            marginBottom: '0',
            color: 'hsl(0, 5%, 30%)',
            textAlign: 'justify',
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
