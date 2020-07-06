import React from 'react';
import PropTypes from 'prop-types'

import styles from './DropDown.module.css'

const DropDown = ({ name, label, values, onChange, value }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(name, value);
  };

  return (
    <label>
      {label}
      <select className={styles.select} value={value} onChange={handleChange}>
        <option value={''} disabled>
          Choose {label}
        </option>
        {values.map(value => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </label>
  );
};

DropDown.propType = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    values: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default DropDown;