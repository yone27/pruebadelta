import React, { useContext } from "react";
import { EntriesContext } from "../../context/EntriesContext";
import Entrie from "./Entrie";
import { Loader } from "../Loader";
import ModalEntrie from "../../hooks/ModalEntrie";
import { SimpleGrid, useDisclosure } from "@chakra-ui/react";

export const Entries = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    entries,
    loading,
    currentPage,
    entriesPerPage,
    getEntrieSelected,
    entriesFiltered,
  } = useContext(EntriesContext);

  const lastIndex = currentPage * entriesPerPage;
  const firstIndex = lastIndex - entriesPerPage;

  return (
    <>
      <ModalEntrie isOpen={isOpen} onClose={onClose} />
      {loading ? (
        <Loader />
      ) : (
        <SimpleGrid columns={[1, null, 3]} spacing="40px">
          {entriesFiltered.length
            ? entriesFiltered
                .map((entrie, key) => (
                  <Entrie
                    entrie={entrie}
                    key={key}
                    onOpen={onOpen}
                    getEntrieSelected={() => getEntrieSelected(entrie)}
                  />
                ))
                .slice(firstIndex, lastIndex)
            : entries
                .map((entrie, key) => (
                  <Entrie
                    entrie={entrie}
                    key={key}
                    onOpen={onOpen}
                    getEntrieSelected={() => getEntrieSelected(entrie)}
                  />
                ))
                .slice(firstIndex, lastIndex)}
        </SimpleGrid>
      )}
    </>
  );
};
