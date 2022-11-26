import { useNavigate } from "react-router-dom";
import logo from './images/setup/logo.png';
import { useState } from "react";
import './App.css';
function Heading(props)
{
    const navigate = useNavigate();
    const navigateToAddbooks = () => {
        navigate("/addbooks");
    };
    const navigateToProfile = () => {
        navigate("/profile");
    };
    return (
        <div className="Heading">
            <img src={logo} className="openNav" onClick={props.toggleNav}></img>
            <h1>Lorem Booksome</h1>
            <button onClick={navigateToAddbooks}>Add a Book</button>
            <button onClick={navigateToProfile}>Your Profile</button>
        </div>
    )
}
export default Heading;