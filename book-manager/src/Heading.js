import { useNavigate } from "react-router-dom";
import logo from './images/setup/logos/logoMiniLight.png';
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
        <div className="Heading bg-dark text-light">
            <img src={logo} className="openNav rounded-circle" onClick={props.toggleNav}></img>
            <h1>Lorem Booksome</h1>
            <button type="button" className="btn text-light hoverChange" onClick={navigateToAddbooks}>Add a Book</button>
            <button type="button" className="btn text-light hoverChange" onClick={navigateToProfile}>Your Profile</button>
        </div>
    )
}
export default Heading;