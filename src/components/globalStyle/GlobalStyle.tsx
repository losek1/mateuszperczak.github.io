import { css, Global, type Theme, useTheme } from "@emotion/react";
import { memo } from "react";

export const GlobalStyle = memo((): JSX.Element => {
  const {
    fillColorPrimary,
    fillColorSecondary,
    textColorPrimary,
    scrollbarColorPrimary,
    scrollbarColorSecondary,
  }: Theme = useTheme();

  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          /* outline: 1px solid #0bd871aa; */
        }
        html,
        body {
          height: 100%;
          scroll-behavior: smooth;
        }
        body {
          display: flex;
          flex-direction: column;
          font-family: "Nunito";
          background: ${fillColorPrimary};
          background: ${`radial-gradient(
            circle,
            ${fillColorSecondary} calc(0vw - 500px),
            ${fillColorPrimary} 0px,
            ${fillColorSecondary} calc(100vw + 500px)
          )`};
          color: ${textColorPrimary};
          overflow-y: scroll;
          overflow-x: hidden;
          user-select: none;
        }
        #root {
          display: flex;
          flex-direction: column;
          flex: 1 0 auto;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: ${fillColorPrimary};
        }
        ::-webkit-scrollbar-thumb {
          background: ${scrollbarColorPrimary};
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${scrollbarColorSecondary};
        }
      `}
    />
  );
});

GlobalStyle.displayName = "GlobalStyle";
