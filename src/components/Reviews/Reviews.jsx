import { fetchMovieReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      const getMovieReviews = async () => {
        try {
          const response = await fetchMovieReviews(movieId);
          const reviews = response.results;
          // console.log(reviews);
          setReviews(reviews);
        } catch {
          toast.error(
            'Failed to load movie cast information, please reload the page'
          );
        }
      };
      getMovieReviews();
    }
  }, [movieId]);

  return (
    <>
      {reviews.length ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h4>We don't have any reviews for this movie.</h4>
      )}
    </>
  );
};

export default Reviews;
