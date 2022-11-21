import React from 'react';
import { useGlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useGlobalContext();

  const income = transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((total, currentTx) => (total += currentTx.amount), 0);

  const expense = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((total, expense) => (total += expense.amount), 0);

  return (
    <>
      <div className='inc-exp-container'>
        <div>
          <h4>Income</h4>
          <p id='money-plus' className='money plus'>
            ${income.toFixed(2)}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id='money-minus' className='money minus'>
            ${Math.abs(expense).toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
};
