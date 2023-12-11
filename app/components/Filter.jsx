import React from 'react';

const FilterDropdown = ({ label, options, onChange }) => (
  <div className="flex lg:ml-16 mb-6 flex-col w-full max-w-xs mx-auto shadow-md rounded-xl overflow-hidden">
    <div className="px-4 py-2 bg-bronze text-white">
      {/*  texto do filtro */}
      <h2 className="text-lg font-semibold">{label}</h2>
    </div>
    {/*  tema de filtro */}
    <div className="px-4 py-2 bg-lbronze">
      <select onChange={onChange} className="w-full text-base outline-none transition duration-500 ease-in-out transform border-transparent rounded-lg bg-lbronze focus:border-gray-500 focus:bg-white focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
        {/*  filtro de opções */}
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default FilterDropdown;