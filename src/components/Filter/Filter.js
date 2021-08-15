import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "components/redux/contact/contact-action";
import styles from './Filter.module.css';
import { getFilter } from "components/redux/contact/contact-selector";
import { Input } from '@material-ui/core';


function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();


  return (
    <label className={styles.itemFilter}>
      <p className={styles.itemTextFilter}>Поиск контактов</p>
      <Input
        className={styles.itemElement}
        type="text"
        value={value}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </label>
  );
}

export default Filter;