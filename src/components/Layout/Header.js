import React, { useState } from "react";
import MenuToggle from "./MenuToggle";
import NavBarContainer from "./NavBarContainer";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className="bg-main-color">
      <NavBarContainer>
        <Logo w="100px" color={["black", "black", "gray.500", "primary.500"]} />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </NavBarContainer>
    </header>
  );
};
