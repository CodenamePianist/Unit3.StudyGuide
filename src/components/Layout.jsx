import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="parties/new">Add a Party!</NavLink>
        </nav>
        <Outlet />
      </header>
    </>
  );
}
