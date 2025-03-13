import React, {useState} from 'react'

const Toggle = ({type, name, id}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    if (type === 'radio') {
      setIsChecked(!isChecked);
    }
  };
  return (
    <div className={`form-check  ${type === 'checkbox' ? 'custom-checkbox form-switch custom-toggle' : ''}`}>
        {(type === 'checkbox' || type === 'radio') && (
        <input 
          className="form-check-input" 
          type={type} 
          id={id} 
          name={name} 
          onChange={handleToggle}
        />
      )}
    </div>
  )
}

export default Toggle
