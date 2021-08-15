import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contact/contact-action';
import { getVisibleContact } from '../redux/contact/contact-selector';

import { Button } from '@material-ui/core';


function ContactList () {
  const contacts = useSelector(getVisibleContact);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <>
      {!contacts.length && <div>Немає жодного контакту</div>}
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.item__contact}>
            <p className={styles.item__text}>{name}</p>
            <p className={styles.item__text}>{number}</p>
            <Button
              className={styles.item__button}
              onClick={() => onDeleteContact(id)}
              color="secondary"
            >
              Видалити
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
  
export default ContactList;