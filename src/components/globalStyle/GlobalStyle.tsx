import { css, Global, Theme, useTheme } from "@emotion/react";
import useWindowDimensions from "@hooks/useWindowDimensions";
import type { FC } from "react";
import { memo } from "react";

const GlobalStyle: FC = (): JSX.Element => {
  const theme: Theme = useTheme();
  const { height } = useWindowDimensions();

  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          /* outline: 1px solid #b6fc03aa; */
        }
        body {
          display: flex;
          flex-direction: column;
          font-family: "Nunito";
          background: ${theme.background};
          color: ${theme.color};
          overflow: hidden;
          user-select: none;
          height: ${`${height}px`};
        }
        #root {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
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
          border-radius: 0.4rem;
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
