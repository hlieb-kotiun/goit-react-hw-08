import { IoIosSearch } from "react-icons/io";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.wrapper}>
      <IoIosSearch className={s.icon} size={22} />
      <input
        onChange={handleFilter}
        value={filter}
        className={s.input}
        type="text"
        placeholder="search"
      />
    </div>
  );
};
export default SearchBox;
