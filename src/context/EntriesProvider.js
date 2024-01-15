import React, { useCallback, useEffect, useState } from "react";

import { EntriesContext } from "./EntriesContext";

import initialState from "../sample.json";

const EntriesProvider = ({ children }) => {
  const [entries, setEntries] = useState(initialState.entries);
  const [entriesFiltered, setEntriesFiltered] = useState([]);

  // Estados para la aplicación simples
  const [loading, setLoading] = useState(false);

  // Pagination
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalEntries, setTotalEntries] = useState(entries.length);

  const [pageNumbers, setpageNumbers] = useState([]);

  const initialPageNumbers = useCallback(() => {
    const numbers = [];
    for (let i = 1; i <= Math.ceil(totalEntries / entriesPerPage); i++) {
      numbers.push(i);
    }
    setpageNumbers(numbers);
  }, [totalEntries]);

  useEffect(() => {
    initialPageNumbers();
  }, [initialPageNumbers]);

  // Modal
  const [entrieSelected, setSelectedEntrie] = useState({});

  const getEntrieSelected = (entrie) => {
    setSelectedEntrie(entrie);
  };

  const filterByCategory = (cat) => {
    setEntriesFiltered([]);

    if (cat === "peliculas") {
      const newRecords = initialState.entries.filter(
        (entrie) => entrie.programType === "movie"
      );
      newRecords.sort((a, b) => a.title.localeCompare(b.title));

      getYears(newRecords);
      setEntries(newRecords);

      setTotalEntries(newRecords.length);
      setCurrentPage(1);
    } else {
      const newRecords = initialState.entries.filter(
        (entrie) => entrie.programType === "series"
      );
      newRecords.sort((a, b) => a.title.localeCompare(b.title));

      getYears(newRecords);
      setEntries(newRecords);
      setTotalEntries(newRecords.length);
      setCurrentPage(1);
    }
  };

  // Años a recorrer
  const [uniqueYears, setUniqueYears] = useState([]);
  const getYears = (newRecords) => {
    const releaseYears = Array.from(
      new Set(newRecords.map((item) => item.releaseYear))
    )
      .filter((year) => year !== 0)
      .sort((a, b) => b - a);
    setUniqueYears(releaseYears);
  };

  // Nuevo estado para el año seleccionado
  const [selectedYear, setSelectedYear] = useState(null);
  const orderYear = () => {
    if (selectedYear) {
      const filteredYear = entries.filter((entry) => {
        if (entry.releaseYear === selectedYear) {
          return entry;
        }
      });

      setTotalEntries(filteredYear.length);
      setEntriesFiltered([...filteredYear]);
    } else {
      setEntries(entries);
      setTotalEntries(entries.length);
    }
  };

  useEffect(() => {
    orderYear();
  }, [selectedYear]);

  return (
    <EntriesContext.Provider
      value={{
        entries,
        setEntries,
        loading,
        setLoading,
        entriesPerPage,
        currentPage,
        setCurrentPage,
        totalEntries,
        setEntriesPerPage,
        getEntrieSelected,
        entrieSelected,
        entriesFiltered,
        orderYear,
        filterByCategory,
        selectedYear,
        setSelectedYear,
        pageNumbers,
        uniqueYears,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};

export default EntriesProvider;
