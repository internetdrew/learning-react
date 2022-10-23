import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BookList />);

const firstBook = {
  img: 'https://m.media-amazon.com/images/I/41VsfjWEvSL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
  title: 'Spooky Pookie (Little Pookie)',
  author: 'Sandra Boynton',
};
const secondBook = {
  img: 'https://m.media-amazon.com/images/I/51430n+9jlL._SY344_BO1,204,203,200_.jpg',
  title: 'Brown Bear, Brown Bear, What Do You See?',
  author: 'Bill Martin Jr.',
};

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sunt
          numquam laborum cum aperiam iure illo blanditiis accusamus quas qui?
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  // const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};
