import React, { useState } from "react";
import MoviesArr from "../../API";
import { useAppContext } from "../../components/context/appContext";

const CategoryPage = () => {
  console.log(MoviesArr);
  //   const [MoviesArr, setMovieArr] = useState([]);
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.log(favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((movie) => movie.id === id);
    return boolean;
  };

  return (
    <div>
      {MoviesArr.map((movie) => (
        <div key={movie.id}>
          <div>
            <h2>{movie.title}</h2>
            {favoritesChecker(movie.id) ? (
              <button onClick={() => removeFromFavorites(movie.id)}>
                Remove
              </button>
            ) : (
              <button onClick={() => addToFavorites(movie)}>Add</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
