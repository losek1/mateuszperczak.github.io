import Close from "@icons/close.svg?react";
import Menu from "@icons/menu.svg?react";
import { m } from "framer-motion";
import { forwardRef } from "react";

import { animation } from "./NavHamburger.animations";
import { StyledNavHamburger } from "./NavHamburger.styles";
import type { NavHamburgerProps } from "./NavHamburger.types";

export const NavHamburger = forwardRef<HTMLButtonElement, NavHamburgerProps>(
  ({ isMenuOpen, ...rest }, ref): JSX.Element => {
    return (
      <StyledNavHamburger {...rest} whileTap="tap" type="button" ref={ref}>
        <m.div className="hamburger-icon-wrapper" variants={animation}>
          {isMenuOpen ? <Close /> : <Menu />}
        </m.div>
      </StyledNavHamburger>
    );
  },
);

NavHamburger.displayName = "NavHamburger";
