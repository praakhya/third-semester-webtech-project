import React from 'react'
import "./App.css"


function Child2() {
  return (
    <div className='child2'>
       <h1>User Profile</h1>
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
                <br/>
                <button type="button" className="btn" >Update</button>

                <button type="button" className="btn btn-link" style={{position:'right'}}>Back</button>
    </div>
    </div>
  )
}

export default Child2 
