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
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Layout/>} className="nav">
                    <Route index element={<Home/>} />
                    <Route path="welcome" element={<Main/>}/>
                    <Route path="login/*" element={<Login/>} />
                    <Route path="signup" element={<Signup/>} />
                    <Route path="*" element={<p>Error</p>} />
                </Route>
            </Routes>
        </BrowserRouter>
      </>
    )
}
console.log("After nav");
export default Nav;