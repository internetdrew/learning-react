import React, { useState, useEffect } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    if (!firstName.trim() || !email.trim()) return;

    const newPerson = { id: new Date().getTime().toString(), firstName, email };
    setPeople([...people, newPerson]);

    setFirstName('');
    setEmail('');
  };

  useEffect(() => {
    console.log(people);
    return () => {
      console.log('cleanup');
    };
  }, [people]);

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name:</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              placeholder='Enter your name...'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='Enter your email address...'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map(person => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
