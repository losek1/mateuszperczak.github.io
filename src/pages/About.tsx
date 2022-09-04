import type { FC } from "react";
import Page from "@components/page/Page";

const About: FC = (): JSX.Element => {
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
      <h1>HELLO IM MATEUSZ</h1>
    </Page>
  );
};

export default About;
