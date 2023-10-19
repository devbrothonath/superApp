import React from "react";
import RegisterPage from "./pages/registerPage/registerPage.jsx";
import CategoryPage from "./pages/categoryPage/categoryPage.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboardPage/dashboardPage.jsx";
import MoviePage from "./pages/moviePage/moviePage.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/movies" element={<MoviePage />} />
      </Routes>
      {/* <RegisterPage /> */}
      {/* <CategoryPage /> */}
    </div>
  );
}

export default App;
