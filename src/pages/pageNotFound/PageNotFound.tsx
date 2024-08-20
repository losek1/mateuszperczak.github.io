import { NotFoundMessage } from "@components/index";

import { StyledPageNotFound } from "./PageNotFound.styles";

export const PageNotFound = (): JSX.Element => {
  return (
    <StyledPageNotFound>
      <NotFoundMessage />
    </StyledPageNotFound>
  );
};
