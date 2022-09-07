import "./nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Users">Users</Link>
        </li>

        <li>
          <Link to="/User">User</Link>
        </li>
      </ul>
    </nav>
  );
};
