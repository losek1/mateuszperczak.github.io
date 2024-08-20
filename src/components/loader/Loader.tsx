import Spinner from "@icons/spinner.svg?react";
import { memo } from "react";

import { StyledLoader } from "./Loader.styles";

export const Loader = memo((): JSX.Element => {
  return (
    <StyledLoader>
      <div className="loader-wrapper">
        <span className="loader">
          <Spinner />
        </span>
      </div>
    </StyledLoader>
  );
});

Loader.displayName = "Loader";
