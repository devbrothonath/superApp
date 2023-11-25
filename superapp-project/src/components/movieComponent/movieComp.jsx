import axios from "axios";
import React, { useEffect, useState } from "react";
import "./movieComp.css"
// import movieAPI from "../../moviesAPIs";96*

const MovieComp = () => {
  const [movieList1, setMovieList1] = useState([]);
  const [movieList2, setMovieList2] = useState([]);
  const [movieList3, setMovieList3] = useState([]);

  //   console.log(movieAPI)

  const allMovieGenres = {
    Action: [
      { id: 1, title: "adam" },
      { id: 2, title: "eve" },
      { id: 3, title: "creed" },
    ],
    Drama: [
      { id: 4, title: "naagin" },
      { id: 5, title: "evening" },
      { id: 6, title: "spy" },
    ],
    Thriller: [
      { id: 7, title: "Dallas Club" },
      { id: 8, title: "Howdy" },
      { id: 9, title: "Farmhouse" },
    ],
    Eastern: [
      { id: 10, title: " Club" },
      { id: 11, title: "How" },
      { id: 12, title: "house" },
    ],
  };
  console.log(allMovieGenres);

  //   with_genres=28|18|14|27|10402|10749|878|53|37

  const movie_URL1 =
    "https://api.themoviedb.org/3/discover/movie?api_key=ddb92a7a1ebd2c6916882f771662e2e3&page=1&with_genres=28,18,53";
  const movie_URL2 =
    "https://api.themoviedb.org/3/discover/movie?api_key=ddb92a7a1ebd2c6916882f771662e2e3&page=1&with_genres=10749,10402,14";
  const movie_URL3 =
    "https://api.themoviedb.org/3/discover/movie?api_key=ddb92a7a1ebd2c6916882f771662e2e3&page=1&with_genres=27,878,37";

  useEffect(() => {
    getMovies1();
    getMovies2();
    getMovies3();
  }, []);

  const getMovies1 = async () => {
    await axios.get(movie_URL1).then((response) => {
      const movieData1 = response.data;
      setMovieList1(movieData1.results);
    });
  };
  const getMovies2 = async () => {
    await axios.get(movie_URL2).then((response) => {
      const movieData2 = response.data;
      setMovieList2(movieData2.results);
    });
  };
  const getMovies3 = async () => {
    await axios.get(movie_URL3).then((response) => {
      const movieData3 = response.data;
      setMovieList3(movieData3.results);
    });
  };
  console.log(movieList1);
  console.log(movieList2);
  console.log(movieList3);

  const allMoviesTogether = movieList1.concat(movieList2, movieList3);

  console.log(allMoviesTogether);

  const genreIdToName = {
    28: "Action",
    18: "Drama",
    10749: "Romance",
    53: "Thriller",
    37: "Western",
    27: "Horror",
    14: "Fantasy",
    10402: "Music",
  };

  const ApiArray = {};

  allMoviesTogether.forEach((obj) => {
    const { genre_ids, ...rest } = obj;

    genre_ids.forEach((genreId) => {
      const genreName = genreIdToName[genreId];
      if (!genreName) {
        return;
      }
      if (!ApiArray[genreName]) {
        ApiArray[genreName] = [];
      }
      ApiArray[genreName].push(rest);
    });
  });

  console.log(ApiArray);

  const genreObject = JSON.parse(localStorage.getItem("favoriteGenres"));

  const selectedGenres = genreObject.map((obj) => obj.title);
  console.log(selectedGenres);
  const filteredGenres = {};
  selectedGenres.forEach((genre) => {
    filteredGenres[genre] = allMovieGenres[genre];
  });
  console.log(filteredGenres);

  // return (
  //   <div>
      
  //   </div>
  // );
  // selectedGenres.map((genre) => {
  //   const movies = filteredGenres[genre];

  //   const randomIndexes = [];
  //   while (randomIndexes.length < 4) {
  //     const randomIndex = Math.floor(Math.random() * movies.length);
  //     if (!randomIndexes.includes(randomIndex)) {
  //       randomIndexes.push(randomIndex);
  //     }
  //   }
  // });

  
  

  return (
    <div className="movie-container">
      {selectedGenres.map((genre) => (
        <div key={genre}>
          <h2>{genre} Movies</h2>
          <ul>
            {filteredGenres[genre].map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      ))}

  //     {/* <div key={genre}>
  //       <h2>{genre} Movies</h2>
  //       <ul>
  //         {randomIndexes.map((index) => (
  //           <li key={movies[index].id}>{movies[index].title}</li>
  //         ))}
  //       </ul>
  //     </div> */}

  //     {/* {movieList.map((movie) => (
  //       <div key={movie.id}><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /></div>
  //     ))} */}
  //   </div>
  );
};

export default MovieComp;
