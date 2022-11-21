import React from 'react';
import { useGlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useGlobalContext();

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, amount) => (acc += amount), 0).toFixed(2);

  console.log(total);

  return (
    <>
      <h4>Balance</h4>
      <h1 className='balance'>${total}</h1>
    </>
  );
};
