import styled from "@emotion/styled";
import { m } from "framer-motion";

export const StyledNavMenu = styled(m.menu)`
  position: fixed;
  top: 74px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  z-index: 1;
  overflow: hidden;
  padding: 10px;
  background-color: ${({ theme: { fillColorPrimary } }): string => fillColorPrimary};
  box-shadow: 0 0 5px 5px
    ${({ theme: { shadowColorPrimary } }): string => shadowColorPrimary};
  border: 2px solid ${({ theme: { strokeColorPrimary } }): string => strokeColorPrimary};
`;
