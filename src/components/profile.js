import React from 'react'

const Profile = props => (
  <div id="profile-container" style={{ margin: '1rem' }}>
    <img
      src={props.profileImg}
      alt={props.personName + `'s profile`}
      style={{
        width: '256px',
        borderRadius: '128px',
        boxShadow: '1px 0 5px hsl(0,0%,30%)',
      }}
    />
    <div
      style={{
        backgroundColor: 'hsl(0,0%,95%)',
        color: 'hsl(217, 41%, 35%)',
        display: 'flex',
        width: '256px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '.5rem 1rem',
        borderRadius: '15px',
        boxShadow: '0 5px 5px hsl(0,0%,50%)',
      }}
    >
      <p style={{ margin: '.25rem 0' }}>{props.personName}</p>
      <p
        style={{ margin: '.25rem 0', padding: '.25rem', textAlign: 'justify' }}
      >
        {props.info}
      </p>
    </div>
  </div>
)

export default Profile
