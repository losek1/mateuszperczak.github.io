import Exclamation from "@icons/exclamation.svg?react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

import {
  StyledButton,
  StyledDescription,
  StyledExclamation,
  StyledLabel,
  StyledNotFoundMessage,
} from "./NotFoundMessage.styles";
import {
  exclamationVariants,
  notFoundMessageVariants,
  textVariants,
} from "./NotFoundMessage.variants";

export const NotFoundMessage = memo((): JSX.Element => {
  const navigate = useNavigate();

  const goHome = (): void => navigate("/", { replace: true });
  const goBack = (): void => navigate(-1);

  return (
    <StyledNotFoundMessage
      initial="initial"
      animate="animate"
      variants={notFoundMessageVariants}
    >
      <StyledExclamation variants={exclamationVariants}>
        <Exclamation />
      </StyledExclamation>
      <StyledLabel variants={textVariants}>404 Page not found</StyledLabel>
      <StyledDescription variants={textVariants}>
        It looks like the page you are looking for does not exist. Make sure the page url
        is correct. How about going back to the home page?
      </StyledDescription>
      <div className="button-wrapper">
        <StyledButton variants={textVariants} onClick={goBack} type="button">
          <span>Go Back</span>
        </StyledButton>
        <StyledButton variants={textVariants} onClick={goHome} type="button">
          <span>Home page</span>
        </StyledButton>
      </div>
    </StyledNotFoundMessage>
  );
});

NotFoundMessage.displayName = "NotFoundMessage";
