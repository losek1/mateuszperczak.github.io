import styled from "@emotion/styled";
import { m } from "framer-motion";

export const StyledNavHamburger = styled(m.button)`
  all: unset;
  display: grid;
  place-items: center;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 200ms;
  cursor: pointer;
  color: ${({ theme: { textColorSecondary } }): string => textColorSecondary};
  &:hover {
    background-color: ${({ theme: { strokeColorPrimary } }): string =>
      strokeColorPrimary};
  }
  .hamburger-icon-wrapper {
    display: grid;
    place-items: center;
    pointer-events: none;
  }
  &:focus-visible {
    outline: 1px solid ${({ theme: { textColorPrimary } }): string => textColorPrimary};
  }
`;
