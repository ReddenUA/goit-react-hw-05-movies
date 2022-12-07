import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const pathFrom = location.pathname === '/' ? '/movies/' : '';
  // console.log('Location:', location.pathname);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${pathFrom}${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
