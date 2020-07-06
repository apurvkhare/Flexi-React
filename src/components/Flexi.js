import React, { useState } from 'react';
import PropTypes from 'prop-types'

import TextField from './TextField';
import DropDown from './DropDown';


import styles from './Flexi.module.css'     

const Flexi = ({ onSubmit, config })=> {
  const initialFormData = {};

  const generateInitialFormData = (items) => {
    items.forEach(item => {
      initialFormData[item.name] = '';
      if (item.children) {
        generateInitialFormData(item.children.items);
      }
    });
  };

  generateInitialFormData(config.items);

  const [formData, setFormData] = useState(initialFormData);

  const handleFieldChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData.person_name, formData.states);
  };

  const renderField = (item)=> {
    switch (item.type) {
      case 'TextField':
        return (
          <TextField
            name={item.name}
            label={item.label}
            value={formData[item.name]}
            onChange={handleFieldChange}
            key={`${item.name}${item.type}`}
          />
        );
      case 'DropDown':
        return (
          <DropDown
            name={item.name}
            label={item.label}
            values={(item).values}
            value={formData[item.name]}
            onChange={handleFieldChange}
            key={`${item.name}${item.type}`}
          />
        );
      default:
        return null;
    }
  };

  const generateFields = (config) => {
    return config.items.reduce((fields, item) => {
      fields.push(renderField(item));
      if (item.children) {
        fields.push(...generateFields(item.children));
      }
      return fields;
    }, []);
  };

  const fields = generateFields(config);

  return (
    <>
        <header>
        <h1 className={styles.header}>Flexi React</h1>
      </header>
      <form className={styles.form} onSubmit={handleSubmit}>
        {fields}
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

Flexi.propType = {
    onSubmit: PropTypes.func.isRequired,
    config: PropTypes.object.isRequired,
}

export default Flexi;