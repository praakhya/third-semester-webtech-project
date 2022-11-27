import React from 'react'
import "./App.css"


function EditProfile(props) {
  return (
    <div className='child2 bg-secondary text-light'>
       <h1>Edit Profile</h1>
      <div className='inputh'>
        <label>Username</label>
        <input type="text" className="form-control" placeholder='Name' style={{top:"10%"}}/>
        <br/>
        <br/>
        <label>Password</label>
        <input type="password" placeholder="password"className="form-control" />
        <br/>
        <br/>
        <label>Currentpassword</label>
        <input type="password" placeholder='currentpassword' className="form-control" />
        <br/>
        <button type="button" className="btn" >Update</button>
        <button type="button" className="btn" style={{position:'right'}}>Back</button>
        <br/>
      </div>
    </div>
  )
}

export default EditProfile 
