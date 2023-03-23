import { ReactComponent as Close } from "@icons/close.svg";
import { ReactComponent as Menu } from "@icons/menu.svg";
import type { FC } from "react";

import StyledNavHamburger from "./NavHamburger.styles";
import type { NavHamburgerProps } from "./NavHamburger.types";

const NavHamburger: FC<NavHamburgerProps> = ({
  isOpen,
  ...rest
}: NavHamburgerProps): JSX.Element => {
  return (
    <StyledNavHamburger {...rest} whileTap={{ scale: 0.9 }}>
      {isOpen ? <Close /> : <Menu />}
    </StyledNavHamburger>
  );
};

export default NavHamburger;
