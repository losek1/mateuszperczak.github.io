import { StyledNavItem } from "./NavItem.styles";
import type { NavItemProps } from "./NavItem.types";

export const NavItem = ({ icon: Icon, name, to, ...rest }: NavItemProps): JSX.Element => {
  return (
    <StyledNavItem to={to} {...rest}>
      <Icon />
      <span>{name}</span>
    </StyledNavItem>
  );
};
