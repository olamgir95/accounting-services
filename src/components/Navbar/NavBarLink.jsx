import { NavLink } from "react-router-dom";

export default function NavbarLink({ link, name, setMenuIsOpen }) {
  let activeStyle = {};
  return (
    <li className="capitalize ">
      <NavLink
        to={link}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        onClick={() => setMenuIsOpen(false)}
      >
        {name}
      </NavLink>
    </li>
  );
}
