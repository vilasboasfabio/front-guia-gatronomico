import React from 'react';
import Select from 'react-select';

const Filter = ({ options, placeholder, onChange }) => {
  return (
    <Select
      options={options}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Filter;