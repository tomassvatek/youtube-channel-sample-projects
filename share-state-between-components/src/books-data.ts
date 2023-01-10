export type Book = {
  id: string;
  title: string;
  author: string;
};

export const booksData: Array<Book> = [
  { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: '2', title: 'The Fellowship of the Ring', author: 'J.R.R. Tolkien' },
  { id: '3', title: 'The Two Towers', author: 'J.R.R. Tolkien' },
  { id: '4', title: 'Titanic', author: 'James Cameron' },
];

export const searchBooks = (searchValue: string) =>
  booksData.filter(
    (book) =>
      book.title.toLowerCase().startsWith(searchValue.toLowerCase()) ||
      book.author.toLowerCase().startsWith(searchValue.toLowerCase())
  );
