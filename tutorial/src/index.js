import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { books } from './books';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BookList />);

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}
