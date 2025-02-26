import React from "react";

const CustomButton = ({ type = "button", onClick, children, className, disabled }) => {
  return (
    <button type={type} onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default CustomButton;
