import React from "react";
import { Box, Text } from "@chakra-ui/react";
import iconYone from "./logo.svg";
import { Link } from "react-router-dom";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        <Link to="/">
          <img src={iconYone} alt="logo" />
        </Link>
      </Text>
    </Box>
  );
}
