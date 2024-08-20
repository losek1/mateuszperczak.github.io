import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  border-top: 2px solid
    ${({ theme: { strokeColorPrimary } }): string => strokeColorPrimary};
  box-shadow: 0 0 5px ${({ theme: { shadowColorPrimary } }): string => shadowColorPrimary};
  background: ${({ theme: { fillColorPrimary, fillColorSecondary } }): string =>
    `linear-gradient(${fillColorPrimary}, ${fillColorSecondary})`};

  .footer-wrapper {
    display: flex;
    flex-direction: column;
    flex: 0 1 1000px;
    padding: 0px 20px;
    border-left: 2px solid
      ${({ theme: { strokeColorPrimary } }): string => strokeColorPrimary};
    border-right: 2px solid
      ${({ theme: { strokeColorPrimary } }): string => strokeColorPrimary};
    @media (max-width: 350px) {
      align-items: center;
    }
  }

  .title-link {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({ theme: { textColorPrimary } }): string => textColorPrimary};
    text-decoration: none;
  }

  .text-wrapper {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 350px) {
      justify-content: center;
    }
    align-items: center;
    gap: 10px;
    font-size: 0.8rem;
  }
`;

export default StyledFooter;
