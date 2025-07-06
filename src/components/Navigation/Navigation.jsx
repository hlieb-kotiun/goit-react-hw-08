import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.navigation}>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="contacts"
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
};
export default Navigation;
