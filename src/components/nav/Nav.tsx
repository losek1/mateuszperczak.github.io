import useMobile from "@hooks/useMobile";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { NavHamburger, NavItem, NavLogo, NavMenu } from "./components";
import { navItems } from "./Nav.items";
import StyledNav from "./Nav.styles";

const Nav = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isMobile = useMobile();

  const toggleMenu = (): void => setIsMenuOpen((wasMenuOpen): boolean => !wasMenuOpen);
  const closeMenu = (): void => setIsMenuOpen(false);

  const menuRef = useRef<HTMLMenuElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      !menuRef.current?.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node) &&
        setIsMenuOpen(false);
    };
    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <StyledNav>
        <div className="nav-content-wrapper">
          <NavLogo />
          {isMobile ? (
            <NavHamburger isMenuOpen={isMenuOpen} onClick={toggleMenu} ref={buttonRef} />
          ) : (
            <div className="nav-buttons-wrapper">
              {navItems.map((navItem, index) => (
                <NavItem {...navItem} key={`nav-item-${index}`} />
              ))}
            </div>
          )}
        </div>
      </StyledNav>
      <AnimatePresence mode="wait">
        {isMobile && (
          <NavMenu isMenuOpen={isMenuOpen} ref={menuRef}>
            {navItems.map((navItem, index) => (
              <NavItem key={`nav-menu-item-${index}`} {...navItem} onClick={closeMenu} />
            ))}
          </NavMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
