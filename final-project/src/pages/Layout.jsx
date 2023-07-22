import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/season">Season</Link>
          </li>
          <li>
            <Link to="/episode">Episode</Link>
          </li> */}
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;