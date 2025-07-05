import { Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import { IoPersonAddOutline, IoPersonAddSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, action) => {
    if (values.name.trim() === "" || values.number.trim() === "") {
      return toast.error("All fields must be field!!!");
    }

    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    action.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <Field
            className={s.input}
            name="name"
            type="text"
            placeholder="name"
          />
          <Field
            className={s.input}
            name="number"
            type="phone"
            placeholder="phone"
          />
          <button className={s.btn} type="submit">
            <IoPersonAddOutline className={s.icon} size={26} />
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
