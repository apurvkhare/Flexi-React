import React from 'react';
import PropTypes from 'prop-types'

import styles from './TextField.module.css'

const TextField = ({ name, label, onChange, value }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(name, value);
  };

  return (
    <label>
      {label}
      <input className={styles.inputText} type="text" value={value} onChange={handleChange} />
    </label>
  );
};

TextField.propType = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default TextField;