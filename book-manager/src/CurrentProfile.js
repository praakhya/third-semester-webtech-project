import React from 'react'


function CurrentProfile(props) {
  return (
    <div className='current'>
        <div className='child1'>
            <img src={props.profilePic!=undefined?props.profilePic:"/images/setup/profilePic.jpg"} alt="Profile Picture" className="rounded-circle" width="200px"/>
        </div>
        <div className='child1-content text-light'>
            <h2>{props.username}</h2>
            <hr style={{color:'white'}}/>
            <br/>
            <h4>Member since @2004</h4>
        </div>
    </div>
  )
}

export default CurrentProfile
