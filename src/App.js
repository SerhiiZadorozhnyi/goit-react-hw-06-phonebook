import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import styles from './App.css';


function App() {
  
  return (
    <div style={{textAlign: "center"}}>
      <h1 className={styles.bigText}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.text}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;