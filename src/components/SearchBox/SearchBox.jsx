import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectQueryFilter } from "../../redux/filters/selectors";
import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox  () {
  const searchId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectQueryFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <form className={css.container}>
      <label htmlFor={searchId}>Find contact by name or number</label>
      <input
        type="text"
        value={filter}
        className={css.input}
        id={searchId}
        onChange={handleFilterChange}
      />
    </form>
  );
};