import React from 'react';

const BookList = ({ books, title }) => {
  if (!books.length) {
    return <h3>No Books Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {books &&
        books.map(book => (
          <div key={book.bookId} className="card mb-3">
            <p className="card-header">
              {book.username}
              book {book.createdAt}
            </p>
            <div className="card-body">
              <p>{book.title}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BookList;