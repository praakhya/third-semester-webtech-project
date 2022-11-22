import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="nav">
        <h1 className="nav-head">Navigate</h1>
        <br/>
            <Link to="/"><button type="button" className="btn text-light hoverChange">Home</button></Link>
            <Link to="/login"><button type="button" className="btn text-light hoverChange">Login</button></Link>
            <Link to="/about"><button type="button" className="btn text-light hoverChange">About</button></Link>
            <Link to="/contact"><button type="button" className="btn text-light hoverChange">Contact</button></Link>
            <Link to="/main"><button type="button" className="btn text-light hoverChange">View Books</button></Link>
      </div>

      <Outlet />
    </>
  )
};

export default Layout;
