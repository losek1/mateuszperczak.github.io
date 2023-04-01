import { memo } from "react";

import StyledNavLogo from "./NavLogo.styles";

const NavLogo = (): JSX.Element => {
  return <StyledNavLogo to="/">MP</StyledNavLogo>;
};

export default memo(NavLogo);
