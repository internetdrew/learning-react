import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BookList />);

const books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/41VsfjWEvSL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Spooky Pookie (Little Pookie)',
    author: 'Sandra Boynton',
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/51430n+9jlL._SY344_BO1,204,203,200_.jpg',
    title: 'Brown Bear, Brown Bear, What Do You See?',
    author: 'Bill Martin Jr.',
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

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
