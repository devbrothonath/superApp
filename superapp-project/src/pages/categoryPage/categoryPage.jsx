import React, { useState } from "react";
// import MoviesArr from "../../API";
// import { useAppContext } from "../../components/context/appContext";
import CategoryComp from "../../components/categoryComponent/categoryComp";
import FavoritesComp from "../../components/favoritesComponent/favoritesComp";
import "./categoryPage.css";

const CategoryPage = () => {
  // const [isShown, setIsShown] = useState(false);
  // console.log(MoviesArr);

  // const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  // console.log(favorites);
  // console.log(favorites.length);

  // const favoritesChecker = (id) => {
  //   const boolean = favorites.some((movie) => movie.id === id);
  //   return boolean;
  // };

  // let errorMsg = null;
  // const showError = () => {
  //   if (favorites.length < 3) {
  //     errorMsg = "Select more cats!";
  //     console.log(errorMsg)
  //     return errorMsg;
  //   } else {
  //     console.log("Go ahead")
  //   }
  // }

  // const showError = () => {
  //   if (favorites.length >= 3) {
  //     setIsShown(false);
  //     console.log("go ahead");
  //   } else {
  //     setIsShown(true);
  //   }

  // }

  return (
    <div className="categoryPage">
      <div className="favSide">
        <h1>Super app</h1>
        <p>Choose your entertainment category</p>
        <div>
          <FavoritesComp />
        </div>
      </div>
      <div className="catSide">
        <CategoryComp />
      </div>

      {/* <div className="selected">
        <div>
          {favorites.map((fav) => (
            <div key={fav.id}>
              <div>
                <h4>{fav.title}</h4>
                <button onClick={() => removeFromFavorites(fav.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        {isShown && (<span>Select more!</span>)}
      </div> */}
      {/* <button onClick={showError}>Sign up</button> */}
    </div>
  );
};

export default CategoryPage;
