import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ 
  children, 
  className = '',
  variant = 'default',
  ...props 
}) => {
  const baseClasses = 'rounded-[30px] overflow-hidden transition-all duration-200';
  
  const variants = {
    default: 'bg-white shadow-md',
    service: 'bg-white relative',
    scholarship: 'p-8',
    gray: 'bg-[#eeefef]',
    orange: 'bg-[#fde1d6]',
    white: 'bg-white'
  };
  
  const cardClasses = `${baseClasses} ${variants[variant]} ${className}`;
  
  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'service', 'scholarship', 'gray', 'orange', 'white']),
};

export default Card;