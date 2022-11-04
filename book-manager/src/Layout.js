import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css'
function Layout()
{
    return (
        <>
        <nav className="nav">
        <h1 className="navText">Navigate</h1>
              <Link to="/" className="navText">Welcome</Link>
              <Link to="/login" className="navText">Login</Link>
              <Link to="/signup" className="navText">Sign up</Link>
        </nav>
  
        <Outlet />
      </>
        )
}
export default Layout;