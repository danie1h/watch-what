import React from 'react'

import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <h1>Reach Out and Send Our Team a Message!</h1>
    <h3>Topics we would love to hear from you about:</h3>
    <ul>
      <li>Your experience with our service</li>
      <li>Suggestions on how we can improve</li>
      <li>Your interest in getting involved</li>
    </ul>
    <form>
      <label for='your-name'>Name:</label>
      <input
        type='text'
        name='your-name'
        placeholder='Jane Doe'
        required
      />
      <label for='subject'>Subject:</label>
      <input
        type='text'
        name='subject'
        placeholder='message subject'
        required
      />
      <label for='message'>Message:</label>
      <input
        type='texbox'
        name='message'
        placeholder='...'
        required
      />
      <button>Launch Message!</button>
    </form>
  </Layout>
)

export default ContactPage
