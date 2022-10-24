import React from 'react';

const Book = ({ img, title, author }) => {
  const clickHandler = e => {
    console.log(e);
    alert('hello world');
  };
  const complexEx = author => {
    console.log(author);
  };
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt='' />
      <div>
        <h1>{title}</h1>
        <h4>{author}</h4>
      </div>
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
      <button type='button' onClick={() => complexEx(author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;
