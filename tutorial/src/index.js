import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BookList />);

const author = 'Sandra Boynton';
const title = 'Spooky Pookie (Little Pookie)';
const img =
  'https://m.media-amazon.com/images/I/41VsfjWEvSL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* <p>{let x = 6}</p> */}
      <p>{6 + 6}</p>
    </article>
  );
};
