import React, { MouseEvent, useState } from 'react';
import '../styles/Search.css';

interface Props {
  searchMovie(searchTerm: string): void;
}

const Search: React.FC<Props> = ({ searchMovie }) => {
  const [input, setInput] = useState('');

  function handleClick(e: MouseEvent) {
    e.preventDefault();

    searchMovie(input);
    setInput('');
  }

  return (
    <form>
      <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
      <button disabled={!input} onClick={handleClick}>
        Search
      </button>
    </form>
  );
};

export default Search;
