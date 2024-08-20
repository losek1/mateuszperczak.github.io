import Page from "@components/page/Page";
import Project from "@components/project/Project";

import { projects } from "./Projects.data";
import StyledProjectsAnimationProvider from "./Projects.styles";
import { providerVariants } from "./Projects.variants";

const Projects = (): JSX.Element => {
  return (
    <Page>
      <StyledProjectsAnimationProvider
        initial="initial"
        animate="animate"
        exit="exit"
        variants={providerVariants}
      >
        {projects.map((props, index) => (
          <Project key={`project-${index}`} {...props} />
        ))}
      </StyledProjectsAnimationProvider>
    </Page>
  );
};

export default Projects;
