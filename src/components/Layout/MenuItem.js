import { Text } from "@chakra-ui/react";
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <ChakraLink as={ReactRouterLink} to={to}>
      <Text display="block" className="second-color link-custom" {...rest}>
        {children}
      </Text>
    </ChakraLink>
  );
};

export default MenuItem;
