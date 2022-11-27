import React from 'react'
import CurrentProfile from './CurrentProfile'
import EditProfile from './EditProfile'

import "./App.css"

function Profile(props) {
  return (
    <div className='home bg-dark'>
        <div className='headerBox'>
          <div className='header'>
            Your Profile
          </div>
          <hr style={{color:'white',textShadow:'0px 0px 5px #fff'}}/>
        </div>
        <div className='box1'>
          <CurrentProfile/>
          <EditProfile/>
        </div>
    </div>
  )
}

export default Profile


