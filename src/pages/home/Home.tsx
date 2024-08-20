import { AnimatedUserCard, Page } from "@components/index";

import { StyledHomeAnimationProvider } from "./Home.styles";

export const Home = (): JSX.Element => {
  return (
    <Page>
      <StyledHomeAnimationProvider initial="initial" animate="animate" exit="exit">
        <AnimatedUserCard />
      </StyledHomeAnimationProvider>
    </Page>
  );
};
