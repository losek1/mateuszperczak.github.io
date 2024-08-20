import styled from "@emotion/styled";

const StyledLoader = styled.div`
  display: flex;
  flex: 1 0 100%;
  align-items: stretch;
  justify-content: center;
  .loader-wrapper {
    display: grid;
    place-items: center;
    flex: 1;
    max-width: 1000px;
    border-left: 2px solid
      ${({ theme: { strokeColorPrimary } }): string => strokeColorPrimary};
    border-right: 2px solid
      ${({ theme: { strokeColorPrimary } }): string => strokeColorPrimary};
    padding-bottom: 64px;
  }
  .loader {
    color: ${({ theme: { textColorSecondary } }): string => textColorSecondary};
    line-height: 0;
    font-size: 3rem;
    animation: spin 500ms linear infinite forwards;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

StyledLoader;
