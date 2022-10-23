import { useState, useEffect } from 'react'
import React from 'react';
import './App.css'
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
function Login(props)
{
    var baseUrl = "/api";
    var usrRef = React.createRef();
    var pswdRef = React.createRef();
    var opRef = React.createRef();
    var [dataRecieved,setDisp] = useState("");
    
    const confirmLogin = () => {
        console.log(usrRef.current.value,pswdRef.current.value);
        fetch(baseUrl+'/auth/login', {
            method:'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                username: usrRef.current.value,
                password: pswdRef.current.value
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
            console.log(data)
            setDisp(dataRecieved=>data.username+data.fullname);
        })
        .catch((err) => {
            console.log(err);
            setDisp(dataRecieved=>"Error " + err.message);
        });
    };
    const switchToSignup = () => {
        props.toggle("signup",props.comps);
        //props.onSignup();
        //props.offLogin();
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <label>Username</label>
            <input type="text" className="form-control" id="usr" ref={usrRef}/>
            <label>Password</label>
            <input type="password" className="form-control" id="pswd" ref={pswdRef}/>
            <button type="button" className="btn" onClick={confirmLogin}>Login</button>
            <button type="button" className="btn btn-link" onClick={switchToSignup}>New here? Create an account</button>
            <p>{dataRecieved}</p>
        </div>
    )
    
}
export default Login;