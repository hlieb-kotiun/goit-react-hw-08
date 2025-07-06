import { Field, Form, Formik } from "formik";
import s from "./LoginPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { loginThunk } from "../../redux/auth/operations";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    if (values.email === "" || values.password === "") {
      return toast.error("Please fill all the fields!", {
        position: "top-center",
      });
    }
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => navigate("/contacts"))
      .catch(() =>
        toast.error("Ops, something went wrong, please try later!", {
          position: "top-center",
        })
      );
    actions.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <h2 className={s.title}>Login</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <label className={s.label}>
            <span className={s.span}>Email</span>
            <Field
              className={s.input}
              name="email"
              placeholder="alice@mail.com"
            />
          </label>

          <label className={s.label}>
            <span className={s.span}>Password</span>
            <Field className={s.input} name="password" type="password" />
          </label>

          <button className={s.btn} type="submit">
            Login
          </button>

          <p>
            Don`t have an account? <Link to="/register">Register</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginPage;
