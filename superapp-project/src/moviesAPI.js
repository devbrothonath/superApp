import axios from "axios";
import React, { useEffect, useState } from "react";

const MovieAPI = () => {
  const [movieList, setMovieList] = useState([]);

  //   with_genres=28|18|14|27|10402|10749|878|53|37

  const movie_URL =
    "https://api.themoviedb.org/3/discover/movie?api_key=ddb92a7a1ebd2c6916882f771662e2e3&page=1&with_genres=53,878,10749";

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    await axios.get(movie_URL).then((response) => {
      const movieData = response.data;
      setMovieList(movieData.results);
    });
  };

  return movieList;
};

export default MovieAPI;
