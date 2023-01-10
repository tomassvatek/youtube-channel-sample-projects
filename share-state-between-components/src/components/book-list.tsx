import { useState } from 'react';
import { Book, booksData, searchBooks } from '../books-data';
import { useSearch } from '../search-context';

// Starting point
export function BookList() {
  const [books] = useState(booksData);

  return (
    <div>
      {books.map((book) => (
        <div
          key={book.id}
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '1rem',
            margin: '1rem 0',
          }}
        >
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
}

// Lifting state up version
export function BookListLiftingStateUp({ books }: { books: Array<Book> }) {
  return (
    <div>
      {books.map((book) => (
        <div
          key={book.id}
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '1rem',
            margin: '1rem 0',
          }}
        >
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
}

// React Context version
export function BookListContext() {
  const { searchValue } = useSearch();
  const searchedBooks = searchBooks(searchValue);

  return (
    <div>
      {searchedBooks.map((book) => (
        <div
          key={book.id}
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '1rem',
            margin: '1rem 0',
          }}
        >
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
}
