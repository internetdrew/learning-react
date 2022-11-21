import React, { useState } from 'react';
import { useGlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useGlobalContext();

  const handleSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setAmount('');
    setText('');
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='text'
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder='Enter amount...'
          />
        </div>
        <input type='submit' value='submit' />
      </form>
    </>
  );
};
