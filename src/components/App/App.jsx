import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import { SyncLoader } from "react-spinners";

function App() {
  const dispatch = useDispatch();
  // const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="mainTitle">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {/* {error && <p>{error}</p>} */}
      {loading && <SyncLoader color="rgb(87, 87, 235)" />}
      <ContactList />
    </div>
  );
}

export default App;
