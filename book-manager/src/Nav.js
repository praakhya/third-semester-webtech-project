import './App.css'
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
function Nav(props)
{
    var [loggedIn, setLog] = useState(props.loggedIn);
    const handleHome = () => 
    {
        props.toggle("home", props.comps);
        setLog(loggedIn => props.loggedIn);
    }
    const handleLogin = () => 
    {
        props.toggle("login",props.comps);
        setLog(loggedIn => props.loggedIn);
    }
    const handleMain = () => 
    {
        props.toggle("main",props.comps);
        setLog(loggedIn => props.loggedIn);
    }
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
export default Nav;