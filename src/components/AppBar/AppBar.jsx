import { Route, Routes } from "react-router-dom";
import s from "./AppBar.module.css";
import Layout from "../Layout/Layout";
import { SiHomepage } from "react-icons/si";
import HomePage from "../../pages/HomePage/HomePage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFound from "../../pages/NotFound/NotFound";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";

const AppBar = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppBar;
