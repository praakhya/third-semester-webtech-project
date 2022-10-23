import React from 'react';
import { useState } from 'react';
function Signup() {
    var pswd1 = React.createRef();
    var pswd2 = React.createRef();
    var [disp, setDisp] = useState("");
    const pswdValidity = () => {
        if (pswd1.current.value!=pswd2.current.value)
        {
            setDisp(disp => "passwords do not match");
        }
        else
        {
            setDisp(disp => "passwords match");
        }
    }
    return (
    <div className="login">
        <h1>Signup</h1>
        <label>Username</label>
        <input type="text" className="form-control" id="usr"/>
        <label>Password</label>
        <input type="password" className="form-control" id="pswd" ref={pswd1}/>
        <label>Confirm Password</label>
        <input type="password" className="form-control" id="pswd" ref={pswd2}/>
        <button type="button" className="btn" onClick={pswdValidity}>Sign up</button>
        <p>{disp}</p>
    </div>
    )
}
export default Signup;