import React, { createContext, useReducer, useContext } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);
// Create context

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = id => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  const addTransaction = transaction => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
