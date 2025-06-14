import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './Contact.module.css';

export default function Contact({ id, name, phone }) {
  const dispatch = useDispatch();
  return (
    <li className={styles.item}>
      {name}: {phone}
      <button
        className={styles.btn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
}
