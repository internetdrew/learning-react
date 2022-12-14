import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';
// reducer function

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hello world',
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);
  // const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (!name.trim()) {
      dispatch({ type: 'NO_VALUE' });
    }

    if (name.trim()) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <button type='submit'>add person</button>
      </form>
      {state.people.map(person => {
        const { name, id } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button
              onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: id })}
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
