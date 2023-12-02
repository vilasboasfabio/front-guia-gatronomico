import React from 'react';

const FilterDropdown = ({ label, options, onChange }) => (
  <div className="flex flex-col">
    <label>{label}</label>
    <select onChange={onChange} className="rounded-md p-2">
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default FilterDropdown;