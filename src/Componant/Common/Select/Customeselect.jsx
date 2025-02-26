import React from "react";

const CustomSelect = ({ options = [], value, onChange, name, className, placeholder }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`border rounded-lg px-4 py-2 outline-none ${className}`}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;

