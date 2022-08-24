import { css, Global, Theme, useTheme } from "@emotion/react";
import { memo } from "react";
import type { FC } from "react";

const GlobalStyle: FC = (): JSX.Element => {
  const theme: Theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          /* outline: 1px solid #acac00; */
        }
        body {
          font-family: "Sora";
          background-color: ${theme.background};
          color: ${theme.color};
          overflow: hidden;
          width: 100%;
          height: 100vh;
        }
        #root {
          display: flex;
          flex-direction: column;
          align-items: center;

          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        ::-webkit-scrollbar {
          width: 10px;
          background-color: ${theme.scrollbar};
        }
        ::-webkit-scrollbar-thumb {
          background-color: ${theme.accent};
        }
        ::selection {
          background-color: ${theme.accent};
          color: ${theme.color};
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
