import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [user, setUser] = useState('default user');

  const displayUser = user => {
    const { login } = user;
    setUser(login);
    setIsLoading(false);
  };

  const getUser = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        setIsLoading(false);
        setIsError(true);
        setErrorMsg('problem fetching user');
        throw new Error('problem fetching user');
      }

      const user = await res.json();
      console.log(user);
      displayUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>error...</h1>
        <p>{errorMsg}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
