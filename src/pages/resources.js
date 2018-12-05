import React from 'react'

import Layout from '../components/layout'

const ResourcesPage = () => (
  <Layout>
    <div
      className="resources-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          color: 'hsl(217, 41%, 23%)',
          backgroundColor: 'hsl(168, 59%, 85%)',
          padding: '3rem 1.5rem',
        }}
      >
        <h1 style={{ margin: 0 }}>Resources</h1>
      </div>
      <div
        id="resource-info"
        style={{
          width: '100%',
          color: 'hsl(217, 41%, 23%)',
          fontSize: '1.25em',
          padding: '3rem 3rem',
          backgroundColor: 'hsl(168, 59%, 95%)',
        }}
      >
        <h3>Suicide Prevention</h3>
        <p style={{ marginBottom: 0, textAlign: 'justify' }}>
          Toll-free National Suicide Prevention Lifeline (NSPL): 1-800-273-TALK
          (8255)
        </p>
        <a
          href="https://suicidepreventionlifeline.org/help-yourself/"
          style={{ display: 'block', marginBottom: '1.45rem' }}
        >
          https://suicidepreventionlifeline.org/help-yourself/
        </a>
        <hr />
        <h3>Mental and/or Substance Abuse</h3>
        <p style={{ marginBottom: 0, textAlign: 'justify' }}>
          SAMHSA’s National Helpline, 1-800-662-HELP (4357), (also known as the
          Treatment Referral Routing Service) or TTY: 1-800-487-4889 is a
          confidential, free, 24-hour-a-day, 365-day-a-year, information
          service, in English and Spanish, for individuals and family members
          facing mental and/or substance use disorders. This service provides
          referrals to local treatment facilities, support groups, and
          community-based organizations. Callers can also order free
          publications and other information.
        </p>
        <a
          href="https://www.samhsa.gov/find-help/national-helpline"
          style={{ display: 'block', marginBottom: '1.45rem' }}
        >
          https://www.samhsa.gov/find-help/national-helpline
        </a>
        <hr />
        <h3>Sexual Assault Consultation</h3>
        <p style={{ marginBottom: 0, textAlign: 'justify' }}>
          Call 800.656.HOPE (4673) to be connected with a trained staff member
          from a sexual assault service provider in your area.
        </p>
        <a
          href=" https://www.rainn.org/about-national-sexual-assault-telephone-hotline"
          style={{ display: 'block', marginBottom: '1.45rem' }}
        >
          https://www.rainn.org/about-national-sexual-assault-telephone-hotline
        </a>
      </div>
    </div>
  </Layout>
)

export default ResourcesPage
