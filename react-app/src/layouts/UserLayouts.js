import { Link, Outlet } from "react-router-dom";
export const UserLayouts = () => {
  return (
    <>
      <h3>User Layout</h3>
      <ul>
        <li>
          <Link to="/users/John">User 1</Link>
        </li>
        <li>
          <Link to="/users/Jane">User 2</Link>
        </li>
        <li>
          <Link to="/users/Francis">User 3</Link>
        </li>
        <li>
          <Link to="/users/new">NewUser</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
