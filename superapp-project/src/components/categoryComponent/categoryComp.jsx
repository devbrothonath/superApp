import React from "react";
import MoviesArr from "../../API";
import { useAppContext } from "../../components/context/appContext";
import "./categoryComp.css";

const CategoryComp = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  return (
    <div className="categorySide">
      <div className="categories">
        {MoviesArr.map((movie) => (
          <div
            className={movie.className}
            key={movie.id}
            onClick={() => addToFavorites(movie)}
          >
            
              <h2 className="ctgTitle">{movie.title}</h2>
              <img className="ctgImg" src={movie.img} alt="john" />
              {/* <button onClick={() => addToFavorites(movie)}>Add</button> */}
              {/* {favoritesChecker(movie.id) ? (
          <button onClick={() => removeFromFavorites(movie.id)}>
            Remove
          </button>
        ) : (
          <button onClick={() => addToFavorites(movie)}>Add</button>
        )} */}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryComp;
