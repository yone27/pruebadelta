import React, { useContext } from "react";
import { EntriesContext } from "../context/EntriesContext";
import { Select } from "@chakra-ui/react";

export const FilterBar = () => {
  const { uniqueYears, setSelectedYear } = useContext(EntriesContext);

  // FILTER BY YEAR
  const handleYearSelect = (e) => {
    const selectedYear = parseInt(e.target.value, 10);
    setSelectedYear(selectedYear);
  };

  const singleYear = [];
  for (let i = 1980; i < 2025; i++) {
    singleYear.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <>
      <h2>Filtros</h2>
      <Select placeholder="Año de estreno..." onChange={handleYearSelect}>
        {uniqueYears.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </Select>
    </>
  );
};
