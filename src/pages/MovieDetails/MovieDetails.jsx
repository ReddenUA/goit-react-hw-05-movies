import { fetchMovieById } from 'api';
import { BackLink } from 'components/BackLink/BackLink';
import { Loader } from 'components/Loader/Loader';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Additional, MainContent, MainInfo } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  // console.log(movieId);
  // console.log('MovieDetails location:', location.state);

  useEffect(() => {
    if (movieId) {
      const getMovieById = async () => {
        try {
          setIsLoading(true);
          const response = await fetchMovieById(movieId);
          const movie = response;
          // console.log(movie);
          setMovie(movie);
        } catch {
          toast.error(
            'Failed to load movie detailed information, please reload the page'
          );
        } finally {
          setIsLoading(false);
        }
      };
      getMovieById();
    }
  }, [movieId]);

  const {
    genres = [],
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
  } = movie;
  const year = new Date(release_date).getFullYear();
  const base_url = 'http://image.tmdb.org/t/p/';
  // console.log(year);
  // console.log(genres);
  const genresString = genres.map(genre => genre.name).join(' ');
  // console.log(genresString);
  const userScore = (vote_average * 10).toFixed(0);

  return (
    <>
      <BackLink to={backLinkHref}></BackLink>
      {isLoading && <Loader />}
      <MainContent>
        <img
          src={poster_path && `${base_url}w300${poster_path}`}
          width="300"
          alt={title}
        />
        <MainInfo>
          <h2>
            {title} ({year})
          </h2>
          <p>User Score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genresString}</p>
        </MainInfo>
      </MainContent>
      <Additional>Additional Information</Additional>
      <ul>
        <li>
          <Link to="cast" state={location.state}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={location.state}>
            Reviews
          </Link>
        </li>
      </ul>
      <hr />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
