import React, { useState } from "react";
import { useAppContext } from "../../components/context/appContext";
import "./favoritesComp.css";

const FavoritesComp = () => {
  const [isShown, setIsShown] = useState(false);
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  const showError = () => {
    if (favorites.length >= 3) {
      setIsShown(false);
      const favJSON = JSON.stringify(favorites);
      localStorage.setItem("favoriteGenres", favJSON);
      // window.location.href = "/";
    } else {
      setIsShown(true);
    }
  };
  console.log(favorites)
  return (
    <div className="favoritesSide">
      <div>
        <div className="selected">
          {favorites.map((fav) => (
            <div className="widget" key={fav.id}>
              <h4>{fav.title}</h4>
              <button onClick={() => removeFromFavorites(fav.id)}>
                X
              </button>
            </div>
          ))}
        </div>
        {isShown && <span>Select minimum 3 categories</span>}
      </div>
      <button onClick={showError}>Sign up</button>
    </div>
  );
};

export default FavoritesComp;
