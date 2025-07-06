import { useSelector } from "react-redux";
import s from "./UserMenu.module.css";
import { selectUserName } from "../../redux/auth/selectors";

const UserMenu = () => {
  const userName = useSelector(selectUserName);
  return (
    <div className={s.userMenuWrapper}>
      <p className={s.name}>Welcome: {userName}</p>
      <button className={s.btn}>Logout</button>
    </div>
  );
};
export default UserMenu;
