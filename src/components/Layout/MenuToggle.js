import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      <Button>{isOpen ? <CloseIcon /> : <HamburgerIcon />}</Button>
    </Box>
  );
};

export default MenuToggle;
