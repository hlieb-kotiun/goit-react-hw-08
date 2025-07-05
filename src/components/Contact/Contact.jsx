import { AiOutlineDelete } from "react-icons/ai";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.item}>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={handleDelete} className={s.btn}>
        <AiOutlineDelete size={24} />
      </button>
    </li>
  );
};
export default Contact;
