import { useState } from 'react';
import { useSearch } from '../search-context';

// Starting point of the video
export function SearchInput() {
  const [searchValue, setSearchValue] = useState<string>('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search a book"
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
}

// Lifting state up version
export function SearchInputLiftingStateUp({
  searchValue,
  onChange,
}: {
  searchValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search a book"
        value={searchValue}
        onChange={onChange}
      />
    </div>
  );
}

// React Context version
export function SearchInputContext() {
  const { searchValue, setSearchValue } = useSearch();

  return (
    <div>
      <input
        type="text"
        placeholder="Search a book"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}
