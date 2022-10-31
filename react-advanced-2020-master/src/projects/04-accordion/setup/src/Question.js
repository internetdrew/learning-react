import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={toggleInfo}>
          <FaPlus />
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
