import { forwardRef } from "react";

import { StyledNavMenu } from "./NavMenu.styles";
import type { NavMenuProps } from "./NavMenu.types";

export const NavMenu = forwardRef<HTMLMenuElement, NavMenuProps>(
  ({ isMenuOpen, children, ...rest }, ref): JSX.Element => {
    return (
      <StyledNavMenu
        ref={ref}
        animate={{
          y: isMenuOpen ? 0 : "-100%",
          opacity: isMenuOpen ? 1 : 0,
          right: 10,
        }}
        initial={false}
        transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
        {...rest}
      >
        {children}
      </StyledNavMenu>
    );
  },
);

NavMenu.displayName = "NavMenu";
