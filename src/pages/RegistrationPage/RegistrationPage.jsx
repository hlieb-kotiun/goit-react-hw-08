import { Field, Form, Formik } from "formik";
import s from "./RegistrationPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    if (values.name === "" || values.email === "" || values.password === "") {
      toast.error("Please fill all field!", {
        position: "top-center",
      });
    }
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate("/"))
      .catch(() =>
        toast.error("Ops, something went wrong, try later!", {
          position: "top-center",
        })
      );
    actions.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <h2 className={s.title}>Register</h2>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <label className={s.label}>
            <span className={s.span}>Name</span>
            <Field className={s.input} name="name" placeholder="Alice Smith" />
          </label>

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
            Register
          </button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
