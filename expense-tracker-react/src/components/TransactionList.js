import React from 'react';
import { useGlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
  const { transactions } = useGlobalContext();
  console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul className='list' id='list'>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
