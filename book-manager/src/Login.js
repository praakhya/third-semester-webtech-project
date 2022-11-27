import { useState, useEffect, useContext } from 'react'
import React from 'react';
import './App.css'
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
import { useNavigate } from "react-router-dom";
import { userContext, UserConsumer, UserProvider} from "./userContext"
function Login(props)
{
    var baseUrl = "/api";
    var usrRef = React.createRef();
    var pswdRef = React.createRef();
    var opRef = React.createRef();
    var [dataRecieved,setDisp] = useState("");
    var [errLogin, setErrLogin]=useState("");
    const navigate = useNavigate();
    const navigateToMain = () => {
        // navigate to /contacts
        navigate('/main');
    };
    const { user, setUser } = useContext(userContext);
    return <UserConsumer>
    {   
        (userLog)=> {
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
                    setErrLogin(errLogin=>"Login Failed. The username may not exist, please try creating a new account");
                    throw new Error(response.message);
                }
                return response.json();
            })
            .then((data) => {
                userLog.user = data;
                console.log("Logged in Data", user)
                navigateToMain();
            })
            .catch((err) => {
                console.log(err);
            });
        };
        const switchToSignup = () => {
            navigate('/signup');
        }
        const logout=()=>{
            userLog.user = null;
            navigateToMain()
        }    
        return (
            (!userLog.token&&userLog.user!=null)?
            <div className="login">
                <br/>
                <br/>
                <div className="loginBox bg-secondary">
                    <h1>Already Logged In</h1>
                    <button type="button" className="btn text-light signupLink" onClick={logout}>Log Out</button>
                </div>
                <img src="/images/setup/loginBg.jpg" className="loginImg"/>
            </div>:
            <div className="login">
                <br/>
                <br/>
                <div className="loginBox bg-secondary">
                    <h1>Login</h1>
                    <label>Username</label>
                    <input type="text" className="form-control" id="usr" ref={usrRef}/>
                    <label>Password</label>
                    <input type="password" className="form-control" id="pswd" ref={pswdRef}/>
                    <button type="button" className="btn" onClick={confirmLogin}>Login</button>
                    <button type="button" className="btn text-light signupLink" onClick={switchToSignup}>New here? Create an account</button>
                    <p>{errLogin}</p>
                </div>
                <img src="/images/setup/loginBg.jpg" className="loginImg"/>
            </div>
        )}}
        </UserConsumer>
    
}
export default Login;