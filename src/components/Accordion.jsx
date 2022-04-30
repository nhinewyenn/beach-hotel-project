import React, { useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import Title from './Title';

const accordionData = [
  {
    question: 'General Information',
    content: `Languages spoken by staff  (French, English, German, Japanese) `,
    service: `Services includes babysitting, concierge desk service and accessibility support`,
  },
  {
    question: 'Accessibility information',
    content: `For more information about the physical features of our accessible rooms, common areas or special services relating to a specific disability please call 123456789`,
  },
];

const Accordion = () => {
  const [valid, setValid] = useState(false);
  function toggle(i) {
    if (valid === i) return setValid(null);
    setValid(i);
  }

  return (
    <div className="acc-wrapper ">
      <Title title="more information" />
      <div className="acc ">
        {accordionData.map((item, i) => (
          <div className="acc-item">
            <div className="acc-title" onClick={() => toggle(i)} key={i}>
              <h3>{item.question}</h3>
              <span>{valid === i ? <FiChevronDown /> : <FiChevronUp />}</span>
            </div>

            {valid === i ? (
              <div className="acc-content">
                <p>{item.content}</p>
                {item.service && <p className="acc-service">{item.service}</p>}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
