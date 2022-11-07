import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state, action) => {};

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
      setShowModal(true);
      return;
    }

    if (name.trim()) {
      setShowModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName('');
    }
  };

  return (
    <>
      {showModal && <Modal />}
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
      {people.map(person => {
        const { name, id } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
