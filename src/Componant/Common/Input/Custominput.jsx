import React from "react";

const CustomInput = ({ type = "text", placeholder, value, onChange, id, name, className }) => {
  return (
    <input
    id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      className={`border rounded-md px-4 py-2 outline-none ${className}`}
    />
  );
};

export default CustomInput;

