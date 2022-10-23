import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BookList />);

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src='https://m.media-amazon.com/images/I/41VsfjWEvSL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
    alt=''
  />
);

const Title = () => <h1>Spooky Pookie (Little Pookie)</h1>;
const Author = () => <h4>Sandra Boynton</h4>;
