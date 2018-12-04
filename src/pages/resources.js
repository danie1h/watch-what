import React from 'react'

import Layout from '../components/layout'

const ResourcesPage = () => (
  <Layout>
    <div className="resources-container">
      <div
        id="hotlines-container"
        style={{
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h3>Help is just around the corner</h3>
        <p>Hotline 1</p>
        <p>Hotline 1</p>
        <p>Hotline 1</p>
        <p>Hotline 1</p>
        <p>Hotline 1</p>
      </div>
    </div>
  </Layout>
)

export default ResourcesPage
