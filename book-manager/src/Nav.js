import './App.css'
import Button from 'react-bootstrap/Button';
function Nav(props)
{
    const handleHome = () => 
    {
        props.onHome();
        props.offLogin();
    }
    const handleLogin = () => 
    {
        props.offHome();
        props.onLogin();
    }
    return (
        <div className="nav">
            <h1>Navigate</h1>
            <br/>
            <button type="button" className="btn text-light hoverChange" onClick = {handleHome}>Home</button>
            <button type="button" className="btn text-light hoverChange" onClick = {handleLogin}>Login</button>
            <button type="button" className="btn text-light hoverChange">About</button>
            <button type="button" className="btn text-light hoverChange">Contact</button>
        </div>
    )
}
export default Nav;