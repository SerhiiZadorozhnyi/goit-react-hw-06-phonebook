import PropTypes from 'prop-types';
import styles from './Filter.module.css';


function Filter({ value, onChange }) {
  return (
    <label>
      <p>Пошук контактів:</p>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
  
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
  
export default Filter;