import { AnimatedUserCard, Page } from "@components/index";

import { StyledHomeAnimationProvider } from "./Home.styles";
import AnimatedQuote from "@components/animatedQuote/AnimatedQuote";

export const Home = (): JSX.Element => {
  return (
    <Page>
      <StyledHomeAnimationProvider initial="initial" animate="animate" exit="exit">
        {/* <AnimatedUserCard /> */}
        <AnimatedQuote />
      </StyledHomeAnimationProvider>
    </Page>
  );
};
