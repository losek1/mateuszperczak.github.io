import useMobile from "@hooks/useMobile";
import { AnimatePresence } from "framer-motion";
import type { FC } from "react";
import { useState } from "react";
import useMeasure from "react-use-measure";

import { navItems } from "../../config/nav";
import { NavHamburger, NavItem, NavLogo, NavMenu, NavMenuItem } from "./components";
import StyledNav, { StyledNavWrapper, StyledNavWrapperButtons } from "./Nav.styles";

const Nav: FC = (): JSX.Element => {
  const showNavMenu = useMobile();
  const [ref, { left }] = useMeasure({ debounce: 200 });
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (): void => {
    setIsOpen((wasOpen) => !wasOpen);
  };

  const closeNav = (): void => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <StyledNav onClick={closeNav}>
        <StyledNavWrapper ref={ref}>
          <NavLogo />
          <StyledNavWrapperButtons>
            {showNavMenu ? (
              <NavHamburger onClick={toggleOpen} isOpen={isOpen} />
            ) : (
              <>
                {navItems.map((navItem, index) => (
                  <NavItem key={`nav-item-${index}`} {...navItem} />
                ))}
              </>
            )}
          </StyledNavWrapperButtons>
        </StyledNavWrapper>
      </StyledNav>
      <AnimatePresence mode="wait">
        {showNavMenu && (
          <NavMenu isOpen={isOpen} onClick={closeNav} offset={left}>
            {navItems.map((navItem, index) => (
              <NavMenuItem key={`nav-menu-item-${index}`} {...navItem} />
            ))}
          </NavMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
