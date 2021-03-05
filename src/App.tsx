import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import API_KEY from './env/env';

type ResponseType = 'True' | 'False';

export type MovieType = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState<Array<MovieType>>([]);

  useEffect(() => {
    searchMovie('parasite');
  }, []);

  async function searchMovie(searchTerm: string) {
    setLoading(true);
    setError('');
    setMovies([]);

    try {
      const res = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
      const {
        Response,
        Search,
        Error,
      }: { Response: ResponseType; Search?: MovieType[]; Error?: string } = await res.json();

      switch (Response) {
        case 'True':
          setMovies(Search!);
          break;

        case 'False':
          setError(Error!);
          break;

        default:
          const invalidResponse: never = Response;
          console.error(`Invalid response ${invalidResponse}`);
      }
    } catch (error) {
      throw new Error(error.mesage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <Header appTitle="Ticketplace" />

      <main>
        <Search searchMovie={searchMovie} />

        {loading && <strong>loading...</strong>}
        {error && <strong>{error}</strong>}

        {movies.length !== 0 &&
          movies.map((movie) => <Movie key={movie.imdbID} movieInfo={movie} />)}
      </main>
    </div>
  );
}

export default App;
