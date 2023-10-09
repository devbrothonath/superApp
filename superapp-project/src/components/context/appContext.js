import { createContext, useContext, useState } from "react";


const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (context === undefined) {
        throw new Error("AppContext must be within AppContextProvider")
    }

    return context;
}

const AppContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])
    const [isShown, setIsShown] = useState(false);

    const addToFavorites = (movie) => {
        const oldFavorites = [...favorites]

        const newFavorites = oldFavorites.concat(movie);

        setFavorites(newFavorites);

        console.log(newFavorites)

        if (newFavorites.length >= 3) {
            setIsShown(false);
        } else {
            setIsShown(true);
        }
    }

    const removeFromFavorites = (id) => {
        const oldFavorites = [...favorites];

        const newFavorites = oldFavorites.filter((movie)=>movie.id !== id);

        setFavorites(newFavorites);

        console.log(newFavorites)

        setIsShown(newFavorites.length < 3);
    }

    return (
        <AppContext.Provider value={{favorites, addToFavorites, removeFromFavorites}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;