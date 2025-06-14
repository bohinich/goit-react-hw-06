import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactsForm.module.css';

export default function ContactsForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    const exists = contacts.some(c => c.name === name);
    if (exists) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact(name, phone));
    setName('');
    setPhone('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={styles.input}
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Phone
        <input
          className={styles.input}
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
        />
      </label>
      <button className={styles.btn} type="submit">Add contact</button>
    </form>
  );
}
