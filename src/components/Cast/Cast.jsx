import { fetchMovieCredits } from 'api';
import { MdOutlinePortrait } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  //   console.log('in Cast params', movieId);

  useEffect(() => {
    if (movieId) {
      const getMovieCredits = async () => {
        try {
          const response = await fetchMovieCredits(movieId);
          const cast = response.cast;
          // console.log(cast);
          setCast(cast);
        } catch {
          toast.error(
            'Failed to load movie cast information, please reload the page'
          );
        }
      };
      getMovieCredits();
    }
  }, [movieId]);

  const base_url = 'http://image.tmdb.org/t/p/';

  return (
    <>
      <ul>
        {cast.map(({ id, name, profile_path }) => (
          <li key={id}>
            {profile_path === null ? (
              <MdOutlinePortrait size="200" />
            ) : (
              <img
                src={profile_path && `${base_url}w200${profile_path}`}
                alt={name}
                width="240"
              />
            )}

            <p>{name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
