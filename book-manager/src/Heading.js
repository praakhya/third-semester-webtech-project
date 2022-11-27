import { useNavigate } from "react-router-dom";
import React from 'react';
import { useState } from "react";
import { userContext, UserProvider, UserConsumer } from "./userContext";
import './App.css';
function Heading(props) {
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate();
    const navigateToAddbooks = () => {
        navigate("/addbooks");
    };
    const navigateToProfile = () => {
        navigate("/profile");
    };
    const disableHeaderButtons = () => {
        setDisabled(false)
    }
    return (
        <UserConsumer>
            {(userLog) => {
                console.log("UserLog ", userLog)

                return (
                    <div className="Heading bg-dark text-light">
                        <img src="/images/setup/logos/logoMiniLight.png" className="openNav rounded-circle" onClick={props.toggleNav}></img>
                        <h1>Lorem Booksome</h1>
                        <button type="button" disabled={userLog == null || userLog.user == null || userLog.user.token == undefined} className="btn text-light hoverChange" onClick={navigateToAddbooks}>Add a Book</button>
                        <button type="button" disabled={userLog == null || userLog.user == null || userLog.user.token == undefined} className="btn text-light hoverChange" onClick={navigateToProfile}>Your Profile</button>
                    </div>
                )
                        }
            }
        </UserConsumer>)

}
export default Heading;