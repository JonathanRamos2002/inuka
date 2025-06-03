import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-[#f36a34] text-white hover:bg-[#e55a2b] focus:ring-[#f36a34]',
    secondary: 'bg-[#f9f9fb] text-[#030d28] hover:bg-[#eeefef] focus:ring-[#030d28]',
    outline: 'border border-[#030d28] text-[#030d28] hover:bg-[#030d28] hover:text-white focus:ring-[#030d28]',
    white: 'bg-white text-[#030d28] hover:bg-[#f9f9fb] focus:ring-[#030d28]'
  };
  
  const sizes = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'white']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

export default Button;