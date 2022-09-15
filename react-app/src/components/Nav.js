import { Link } from "react-router-dom";
import "../assets/css/Nav.css";

export const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Local weather</Link>
      </li>
      <li>
        <Link to="/search-cities">Search Cities</Link>
      </li>
    </ul>
  );
};
