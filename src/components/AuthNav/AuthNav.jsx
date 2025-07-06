import s from "./AuthNav.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className={s.authNavWrapper}>
      <NavLink
        to="register"
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
      >
        Register
      </NavLink>
      <NavLink
        to="login"
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
      >
        Login
      </NavLink>
    </div>
  );
};
export default AuthNav;
