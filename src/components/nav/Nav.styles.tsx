import styled from "@emotion/styled";

const StyledNav = styled.nav`
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 64px;
  user-select: none;
  z-index: 2;
  background-color: ${({ theme: { fillColorPrimary } }): string => fillColorPrimary};
  background: ${({
    theme: { fillColorSecondary, fillColorPrimary },
  }): string => `radial-gradient(
            circle,
            ${fillColorSecondary} calc(0vw - 500px),
            ${fillColorPrimary} 0px,
            ${fillColorSecondary} calc(100vw + 500px)
          )`};
  border-bottom: 2px solid
    ${({ theme: { strokeColorPrimary } }): string => strokeColorPrimary};
  box-shadow: 0 0 5px ${({ theme: { shadowColorPrimary } }): string => shadowColorPrimary};
  .nav-content-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1000px;
    flex: 1 1 100%;
    padding: 0 20px;
    border-left: 2px solid
      ${({ theme: { strokeColorPrimary } }): string => strokeColorPrimary};
    border-right: 2px solid
      ${({ theme: { strokeColorPrimary } }): string => strokeColorPrimary};
  }
  .nav-buttons-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export default StyledNav;
