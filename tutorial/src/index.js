import React from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BookList />);

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return <article>this is a book</article>;
};
