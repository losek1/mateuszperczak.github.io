import { memo } from "react";

import { StyledNavLogo } from "./NavLogo.styles";

export const NavLogo = memo((): JSX.Element => {
  return <StyledNavLogo to="/">MP</StyledNavLogo>;
});

NavLogo.displayName = "NavLogo";
