import { fetchTrandingMovies } from 'api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTrandingMovies = async () => {
      try {
        setIsLoading(true);
        const response = await fetchTrandingMovies();
        const movies = response.results;
        // console.log('response', response);
        // console.log('movies', movies);
        setTrandingMovies(movies);
      } catch {
        // setError('Failed to load gallary :(');
        toast.error('Failed to load movies, please reload the page');
      } finally {
        setIsLoading(false);
      }
    };
    getTrandingMovies();
  }, []);

  return (
    <>
      <h1>Tranding today</h1>
      {isLoading && <Loader />}
      <MoviesList movies={trandingMovies} />
    </>
  );
};

export default Home;
