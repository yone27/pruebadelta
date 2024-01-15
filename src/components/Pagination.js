import React, { useContext, useEffect } from "react";
import { EntriesContext } from "../context/EntriesContext";
import { Button, Select } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const Pagination = ({ actPage }) => {
  // const pageNumbers = [];
  const {
    entriesPerPage,
    currentPage,
    setCurrentPage,
    pageNumbers,
    setEntriesPerPage,
  } = useContext(EntriesContext);

  const onPreviusPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSpecificPage = (n) => {
    setCurrentPage(n);
  };

  const urlCurrentPage = (actPage) => {
    setCurrentPage(actPage);
  };

  useEffect(() => {
    if (actPage) {
      urlCurrentPage(actPage);
      console.log(currentPage);
    }
  }, [actPage, urlCurrentPage, currentPage]);

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <Button
        className={`pagination-previous previus-btn-pag ${
          currentPage >= 1 ? "is-disable" : ""
        }`}
        disabled={currentPage >= 1 ? true : false}
        onClick={onPreviusPage}
      >
        {"<"}
      </Button>
      <ul className="pagination-list">
        {pageNumbers.map((nroPage) => (
          <li key={nroPage}>
            <ChakraLink
              as={ReactRouterLink}
              to={`/peliculas/${nroPage}`}
              //onClick={() => onSpecificPage(nroPage)}
              className={`pagination-link ${
                nroPage == currentPage ? "is-current" : ""
              }`}
            >
              {nroPage}
            </ChakraLink>
          </li>
        ))}
      </ul>
      <Button
        className={`pagination-next ${
          currentPage >= pageNumbers.length ? "is-disable" : ""
        }`}
        disabled={currentPage >= pageNumbers.length ? true : false}
        onClick={onNextPage}
      >
        {">"}
      </Button>
      <Select
        name="entriesPerPage"
        className="select-pagination"
        value={entriesPerPage}
        onChange={(e) => setEntriesPerPage(e.target.value)}
      >
        {pageNumbers.map((nroPage) => {
          let option = nroPage * 5;
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </Select>
    </nav>
  );
};

export default Pagination;
