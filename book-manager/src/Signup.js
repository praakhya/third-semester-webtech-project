import React from 'react';
import { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useNavigate } from "react-router-dom";
import "./App.css";
function Signup(props) {
    var userRef = React.createRef();
    var nameRef = React.createRef();
    var pswd1 = React.createRef();
    var pswd2 = React.createRef();
    var [disp, setDisp] = useState("");
    var baseUrl = "/api";
    const navigate = useNavigate();
    const navigateToMain = () => {
        // navigate to /contacts
        navigate('/main');
    };
    const pswdValidity = () => {
        if (pswd1.current.value!=pswd2.current.value)
        {
            setDisp(disp => "passwords do not match");
        }
        else
        {
            setDisp(disp => "passwords match");
            confirmSignup();
        }
    }
    const confirmSignup = () => {
        fetch(baseUrl+'/auth/signup', {
            method:'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                username: userRef.current.value,
                fullname: nameRef.current.value,
                password: pswd1.current.value
            })
        })
        .then((response) =>  {

            console.log(response)
            if (response.status != 200) {
                throw new Error(`Request ended with status code ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log("in .then: ",data)
            props.initUser(data.username,data.fullname);
            navigateToMain();
        })
        .catch((err) => {
            console.log("in .catch: ",err);
        });
    };
    return (
    <div className="login bg-secondary">
        <h1>Signup</h1>
        <label>Username</label>
        <input type="text" className="form-control" id="usr" ref={userRef}/>
        <label>Full name</label>
        <input type="text" className="form-control" id="flnm" ref={nameRef}/>
        <label>Password</label>
        <input type="password" className="form-control" id="pswd" ref={pswd1}/>
        <label>Confirm Password</label>
        <input type="password" className="form-control" id="pswd" ref={pswd2}/>
        <button type="button" className="btn" onClick={pswdValidity}>Sign up</button>
    </div>
    )
}
export default Signup;