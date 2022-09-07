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
          /* outline: 1px solid #b6fc03; */
        }
        body {
          display: flex;
          flex-direction: column;
          font-family: "Nunito";
          background: ${theme.background};
          color: ${theme.color};
          height: 100vh;
          overflow: hidden;
        }
        #root {
          display: flex;
          flex-direction: column;
          flex: 1 1 100%;
          overflow-y: scroll;
          overflow-x: hidden;
        }
        ::-webkit-scrollbar {
          @media (max-width: 768px) {
            width: 4px;
          }
          width: 6px;
          background-color: ${theme.scrollbar};
        }
        ::-webkit-scrollbar-thumb {
          background-color: ${theme.accent};
          border-radius: 0.05rem;
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
