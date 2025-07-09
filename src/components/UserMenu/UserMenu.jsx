import { useDispatch, useSelector } from "react-redux";
import s from "./UserMenu.module.css";
import { selectUserName } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() =>
        toast.success(
          "Logged out successfully",
          { position: "top-center" },
          navigate("/login")
        )
      )
      .catch(() =>
        toast.error("Ops, something went wrong!", { position: "top-center" })
      );
  };

  const userName = useSelector(selectUserName);
  return (
    <div className={s.userMenuWrapper}>
      <p className={s.name}>Welcome: {userName}</p>
      <button onClick={handleLogout} className={s.btn}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
