import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/filtersSlice';
import styles from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
}
