import React from 'react'

const Profile = props => (
  <div
    id="profile-container"
    style={{
      margin: '1rem',
      backgroundColor: 'hsl(168, 59%, 97%)',
      padding: '1rem',
      borderRadius: '24px',
      boxShadow: '1px 1px 4px hsl(168, 30%, 55%)',
    }}
  >
    <img
      src={props.profileImg}
      alt={props.personName + `'s profile`}
      style={{
        display: 'block',
        width: '256px',
        borderRadius: '128px',
        boxShadow: '1px 0 4px hsl(168, 20%, 10%)',
      }}
    />
    <div
      style={{
        color: 'hsl(217, 41%, 25%)',
        display: 'flex',
        width: '256px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '.5rem 1rem',
      }}
    >
      <p style={{ margin: '.25rem 0', fontSize: '1.5em' }}>
        <strong>{props.personName}</strong>
      </p>
      <p
        style={{ margin: '.25rem 0', padding: '.25rem', textAlign: 'justify' }}
      >
        {props.info}
      </p>
    </div>
  </div>
)

export default Profile
