import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ 
  type = 'text',
  placeholder = '',
  value,
  onChange,
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'w-full px-5 py-6 text-base font-normal text-[#7f7f7f] bg-[#e1e1e9] rounded-[13px] border-none focus:outline-none focus:ring-2 focus:ring-[#f36a34] transition-all duration-200';
  
  const inputClasses = `${baseClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={inputClasses}
      {...props}
    />
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default InputField;