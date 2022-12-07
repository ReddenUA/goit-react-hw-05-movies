import { fetchQueryMovies } from 'api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Movies = () => {
  const [queryMovies, setQueryMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query) {
      const getQueryMovies = async () => {
        try {
          setIsLoading(true);
          const response = await fetchQueryMovies(query);
          const movies = response.results;
          // console.log('response', response);
          // console.log('movies', movies);
          setQueryMovies(movies);
        } catch {
          toast.error('Failed to load movies, please reload the page');
        } finally {
          setIsLoading(false);
        }
      };
      getQueryMovies();
    }
  }, [query]);

  const querySubmit = query => {
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <>
      <SearchBar queryValue={query} onSubmit={querySubmit} />
      {isLoading && <Loader />}
      <MoviesList movies={queryMovies} />
    </>
  );
};

export default Movies;
