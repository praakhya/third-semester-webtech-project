import './App.css'
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Main from './Main';
import Layout from './Layout';
const Nav = React.forwardRef((ref,props)=>
{
    console.log("refs: ",ref);
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Layout/>} className="nav">
                    <Route index element={ref[0]} />
                    <Route path="login/*" element={props.logRef} />
                    <Route path="signup" element={props.signRef} />
                    <Route path="*" element={<p>Error</p>} />
                </Route>
            </Routes>
        </BrowserRouter>
      </>
    )
})
export default Nav;