import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ items, className = '' }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-xl overflow-hidden">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-7 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
          >
            <span className="text-xl font-normal text-[#3f3f3f] pr-4">
              {item.question}
            </span>
            <div className="bg-[#ececee] rounded-2xl w-8 h-8 flex items-center justify-center flex-shrink-0">
              {openIndex === index ? (
                <img src="/images/img_icon_gray_800_2x10.svg" alt="collapse" className="w-2 h-3" />
              ) : (
                <img src="/images/img_icon_gray_800_10x10.svg" alt="expand" className="w-3 h-3" />
              )}
            </div>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6">
              <p className="text-xl font-normal text-[#3f3f3fb2] leading-8">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default Accordion;