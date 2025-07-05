import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SyncLoader } from "react-spinners";
import { selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="mainTitle">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <SyncLoader color="rgb(87, 87, 235)" />}
      <ContactList />
    </div>
  );
}

export default App;
