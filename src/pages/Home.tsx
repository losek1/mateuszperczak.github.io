import type { FC } from "react";
import Greatings from "@components/greatings/Greatings";
import Page from "@components/page/Page";

const Home: FC = (): JSX.Element => {
  return (
    <Page
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.6,
      }}
    >
      <Greatings />
    </Page>
  );
};

export default Home;
