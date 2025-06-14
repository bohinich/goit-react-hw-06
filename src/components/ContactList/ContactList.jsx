import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

export default function ContactList() {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name.toLowerCase());

  const filtered = items.filter(c =>
    c.name.toLowerCase().includes(filter),
  );

  return (
    <ul className={styles.list}>
      {filtered.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
}
