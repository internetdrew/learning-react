import React from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BookList />);

function BookList() {
  return (
    <section>
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
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/618INpEnVjL._AC_UL900_SR900,600_.jpg'
    alt=''
  />
);

const Title = () => <h1>Spooky Pookie (Little Pookie)</h1>;
const Author = () => <h4>Sandra Boynton</h4>;
