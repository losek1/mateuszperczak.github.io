import AnimatedUserCard from "@components/animatedUserCard/AnimatedUserCard";
import Page from "@components/page/Page";

import StyledHomeAnimationProvider from "./Home.styles";

const Home = (): JSX.Element => {
  return (
    <Page>
      <StyledHomeAnimationProvider initial="initial" animate="animate" exit="exit">
        <AnimatedUserCard />
      </StyledHomeAnimationProvider>
    </Page>
  );
};

export default Home;
