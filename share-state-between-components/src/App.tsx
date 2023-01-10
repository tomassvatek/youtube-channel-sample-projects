import { useState } from 'react';
import {
  BookList,
  BookListLiftingStateUp,
  BookListContext,
} from './components/book-list';
import {
  SearchInputContext,
  SearchInputLiftingStateUp,
} from './components/search-input';
import { SearchProvider } from './search-context';

// Starting point of the video
// function App() {
//   return (
//     <div className="App">
//       <h1>Books Store</h1>
//       <SearchInput />
//       <BookList />
//     </div>
//   );
// }

// Lifting state up version
// function App() {
//   const [searchValue, setSearchValue] = useState<string>('');

//   // If we detect performance issues, we can memoize this variable.
//   const books = searchBooks(searchValue);

//   return (
//     <div className="App">
//       <h1>Books Store</h1>
//       <SearchInputLiftingStateUp
//         searchValue={searchValue}
//         onChange={(event) => setSearchValue(event.target.value)}
//       />
//       <BookListLiftingStateUp books={books} />
//     </div>
//   );
// }

// React Context version
function App() {
  return (
    <div className="App">
      <SearchProvider>
        <h1>Books Store</h1>
        <SearchInputContext />
        <BookListContext />
      </SearchProvider>
    </div>
  );
}

export default App;
