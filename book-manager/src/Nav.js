import './App.css'
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Main from './Main';
import Layout from './Layout';
import Home from './Home';
function Nav(props)
{
    return (
        <div className="nav">
            <h1 className="nav-head">Navigate</h1>
            <br/>
            <button type="button" className="btn text-light hoverChange" onClick = {handleHome}>Home</button>
            <button type="button" className="btn text-light hoverChange" onClick = {handleLogin}>{loggedIn?"Logout":"Login"}</button>
            <button type="button" className="btn text-light hoverChange">About</button>
            <button type="button" className="btn text-light hoverChange">Contact</button>
            <button type="button" className="btn text-light hoverChange" onClick={handleMain}>View Books</button>
        </div>
    )
}
console.log("After nav");
export default Nav;