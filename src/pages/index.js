import React from 'react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <img
      src="https://source.unsplash.com/ZkrueVypQZU/1600x900"
      alt="sample img"
      style={{
        width: '100%',
        margin: 0,
      }}
    />
    <button
      style={{
        width: '100%',
        margin: '1rem auto',
      }}
    >
      View Details
    </button>
    <p>
      ***Eventually, you can click the button (maybe, the pick or an
      icon...still thinking about it), but for now this is just temporary for
      visualization purposes***
    </p>
    <div
      style={{
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
        A Walk To Remember 2
      </h1>
      <p
        style={{
          marginBottom: '1rem',
          color: 'hsl(0, 5%, 60%)',
        }}
      >
        148min
      </p>
      <p
        style={{
          marginBottom: 0,
          textIndent: '1rem',
          fontStyle: 'italic',
          textAlign: 'justify',
        }}
      >
        Years after her passing, Mandy's long lost little sister is now the same
        age as Mandy when she was married. Struggling with the pressures of
        social norms paired with a rocky relationship, Lily is in a persistent
        state of mixed emotions. Life is short, but how avoid making wrong,
        hasty decisions. What is wrong anyways? More importantly, what's right?
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
          140min
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
          @140min
        </p>
        <p
          style={{
            marginBottom: '0',
            color: 'hsl(0, 5%, 30%)',
          }}
        >
          <strong>Category:</strong> Depression
        </p>
        <p
          style={{
            marginBottom: '0',
            color: 'hsl(0, 5%, 30%)',
            textAlign: 'justify',
          }}
        >
          Lily calls off the wedding...or...insert depression related trigger
          here
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
    <img
      src="https://source.unsplash.com/IiwYeihxC58/1600x900"
      alt="sample img"
      style={{
        width: '100%',
        margin: 0,
      }}
    />
    <button
      style={{
        width: '100%',
        margin: '1rem auto',
      }}
    >
      View Details
    </button>
    <img
      src="https://source.unsplash.com/ZC0EbdLC8G0/1600x900"
      alt="sample img"
      style={{
        width: '100%',
        margin: 0,
      }}
    />
    <button
      style={{
        width: '100%',
        margin: '1rem auto',
      }}
    >
      View Details
    </button>
  </Layout>
)

export default IndexPage
