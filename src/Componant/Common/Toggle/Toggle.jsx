import React from 'react';

const Toggle = ({ type, name, id, checked, onChange }) => {
  return (
    <div className={`form-check ${type === 'checkbox' ? 'custom-checkbox form-switch custom-toggle' : ''}`}>
      {(type === 'checkbox' || type === 'radio') && (
        <input
          className="form-check-input bg-secondary bg-opacity-25"
          type={type}
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default Toggle;
