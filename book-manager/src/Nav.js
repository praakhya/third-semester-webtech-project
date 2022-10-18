import './App.css'
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
            <p onClick = {handleHome}>Home</p>
            <p onClick = {handleLogin}>Login</p>
            <p>About</p>
            <p>Contact</p>
        </div>
    )
}
export default Nav;