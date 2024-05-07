import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_URL = `http://localhost:8000/single/s/`;

const SingleMovie = () => {
  const { id } = useParams();
  console.log(id);

  // const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data) {
        setMovie(data);
        console.log(data);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  // debouncing in react js
  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovie(`${API_URL}${id}`);
    }, 150);
    console.log("set");
    return () => {
      clearTimeout(timeOut);
      console.log("clear");
    };
  }, [id]);

  return (
    <>
      <section className="movie-section">
        <div className="movie-card">
          <figure>
            <div>
              <img src={movie.poster_url} alt="" />
            </div>
          </figure>
          <div className="card-content">
            <p className="title">{movie.title}</p>
            <p className=""></p>
            <p className="card-text">Released Date : {movie.released_date}</p>
            <p className="card-text">Genres: {movie.genres}</p>
            <p className="card-text">IMDB-Rating: {movie.imdb_rating} / 10</p>
            <p className="card-text">IMDB-ID: {movie.imdb_id}</p>
            <p className="card-text">IMDB-VOTES: {movie.imdb_votes}</p>
            <p className="card-text">
              Rotten-Tomatoes: {movie.rotten_tomatoes_rating}
            </p>
            <p className="card-text">Type: {movie.type}</p>
            <p className="card-text">Language:{movie.language}</p>
            <p className="card-text">Director: {movie.director}</p>
            <p className="card-text">Actors: {movie.actors}</p>
            <p className="card-text">Boxoffice: {movie.boxoffice}</p>
            <p className="card-text">Runtime: {movie.runtime}</p>
            <p className="card-text">Plot: {movie.plot}</p>
            <NavLink to="/" className="back-btn">
              Go Back
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleMovie;
