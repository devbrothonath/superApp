import React from "react";
import RegisterPage from "./pages/registerPage/registerPage.jsx";
import CategoryPage from "./pages/categoryPage/categoryPage.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
      {/* <RegisterPage /> */}
      {/* <CategoryPage /> */}
    </div>
  );
}

export default App;
