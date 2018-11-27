import React from 'react'

import Layout from '../components/layout'
import rocketIcon from '../images/rocket.png'

const ContactPage = () => (
  <Layout>
    <div className="contact-container">
      <h1 style={{ textAlign: 'center', color: 'hsl(217, 41%, 35%)' }}>
        Reach Out and Send Our Team a Message!
      </h1>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <label for="your-name">Name</label>
        <input
          type="text"
          name="your-name"
          placeholder="Jane Doe"
          required
          style={{ margin: '.25rem 0 1.25rem 0' }}
        />
        <label for="subject">Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Message Subject"
          required
          style={{ margin: '.25rem 0 1.25rem 0' }}
        />
        <label for="message">Message</label>
        <textarea
          name="message"
          rows="5"
          placeholder="Tell us what you think..."
          required
          style={{ margin: '.25rem 0 1.25rem 0', resize: 'none' }}
        />
        <button
          style={{
            margin: '.25rem auto 1.25rem auto',
            width: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25em',
          }}
        >
          <img
            src={rocketIcon}
            alt="message rocket"
            style={{
              margin: 0,
              padding: 0,
            }}
          />
          Launch Message!
        </button>
      </form>
    </div>
  </Layout>
)

export default ContactPage
