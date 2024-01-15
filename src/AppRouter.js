import React from "react";
import { Route, Routes } from "react-router-dom";

// Components

// Pages
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import Error from "./components/Error";
import Main from "./components/Layout/Main";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<HomePage />} />
        <Route path="/peliculas" element={<MoviesPage />} />
        <Route path="/peliculas/:actPage" element={<MoviesPage />} />
        <Route path="/series" element={<SeriesPage />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
};
