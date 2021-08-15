import { useState } from 'react';
import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from '../redux/contact/contact-selector';
import { addContact } from '../redux/contact/contact-action';

import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';


function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContact);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const auditContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (auditContact) {
      alert(`Контакт ${name} з таким іменем вже існує.`);
      reset();
      return;
    }
    dispatch(addContact(name, number));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };


  return (
    <form onSubmit={handleSubmit} className={styles.itemForm}>
      <div className={styles.itemBlock}>
        <label className={styles.label}>
          Ім'я:
            <Input
              type="text"
              name="name"
              value={name}
              placeholder="Jack Sparrow"
              onChange={handleChange}
              className={styles.itemInput}
            />
        </label>

        <label className={styles.label}>
          Номер:
            <Input
              type="tel"
              name="number"
              value={number}
              placeholder="111-11-11"
              onChange={handleChange}
              className={styles.itemInput}
            />
        </label>
      </div>

      <Button type="submit" color="primary" className={styles.button} disabled={name === '' || number === ''}>
        Додати контакт
      </Button>
    </form>
  );
}
  
export default ContactForm;