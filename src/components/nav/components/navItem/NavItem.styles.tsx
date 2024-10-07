import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledNavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  height: 36px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  transition: color 200ms, background-color 200ms;
  cursor: pointer;
  color: ${({ theme: { textColorSecondary } }): string => textColorSecondary};
  &.active {
    color: ${({ theme: { textColorPrimary } }): string => textColorPrimary};
  }
  &:hover {
    background-color: ${({ theme: { strokeColorPrimary } }): string =>
      strokeColorPrimary};
  }
`;
