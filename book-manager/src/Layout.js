import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/comp1">First</Link>
          </li>
          <li>
            <Link to="/comp2">Second</Link>
          </li>
          <li>
            <Link to="/">Third</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
