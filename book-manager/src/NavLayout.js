import { Outlet, Link } from "react-router-dom";
import "./App.css";
const NavLayout = (props) => {
  return (
    <>
      <div className="nav bg-dark text-light" onMouseLeave={props.toggleNav}>
        <br/>
        <br/>
        <br/>
        <Link to="/"><button type="button" className="btn text-light hoverChange">Home</button></Link>
        <Link to="/login"><button type="button" className="btn text-light hoverChange">Login</button></Link>
        <Link to="/signup"><button type="button" className="btn text-light hoverChange">Signup</button></Link>
        <Link to="/main"><button type="button" className="btn text-light hoverChange">View Books</button></Link>
      </div>

      <Outlet />
    </>
  )
};

export default NavLayout;
