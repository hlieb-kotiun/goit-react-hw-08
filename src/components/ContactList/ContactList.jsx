import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.list}>
      <li className={s.item}>
        <h3>Name</h3>
        <h3>Phone</h3>
      </li>
      {contacts.map((item) => {
        return <Contact key={item.id} {...item} />;
      })}
    </ul>
  );
};
export default ContactList;
