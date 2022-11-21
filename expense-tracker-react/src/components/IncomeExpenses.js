import React from 'react';
import { useGlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useGlobalContext();

  const income = transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((total, currentTx) => (total += currentTx.amount), 0)
    .toFixed(2);

  const expense = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((total, expense) => (total += expense.amount), 0);
  console.log(expense);
  return (
    <>
      <div className='inc-exp-container'>
        <div>
          <h4>Income</h4>
          <p id='money-plus' className='money plus'>
            +${income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id='money-minus' className='money minus'>
            -${Math.abs(expense)}
          </p>
        </div>
      </div>
    </>
  );
};
