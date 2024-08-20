import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledNavLogo = styled(NavLink)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  transition: color 200ms;
  padding: 5px 10px;
  border-radius: 5px;
  color: ${({ theme: { textColorSecondary } }): string => textColorSecondary};
  transition: background-color 200ms, color 200ms;
  &.active {
    color: ${({ theme: { textColorPrimary } }): string => textColorPrimary};
  }
  &:hover {
    background-color: ${({ theme: { strokeColorPrimary } }): string =>
      strokeColorPrimary};
  }
`;
