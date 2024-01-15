import React, { useContext, useEffect } from "react";
import { Entries } from "../components/Cards/Entries";
import { FilterBar } from "../components/FilterBar";
import { EntriesContext } from "../context/EntriesContext";
import Pagination from "../components/Pagination";
import { useParams } from "react-router-dom";

const MoviesPage = () => {
  const { filterByCategory } = useContext(EntriesContext);
  const { actPage } = useParams();

  useEffect(() => {
    filterByCategory("peliculas");
  }, []);

  return (
    <>
      <FilterBar />
      <Pagination actPage={actPage} />
      <Entries />
    </>
  );
};

export default MoviesPage;
