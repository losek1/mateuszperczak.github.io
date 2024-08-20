import { Page, Project } from "@components/index";

import { projects } from "./Projects.data";
import { StyledProjectsAnimationProvider } from "./Projects.styles";
import { providerVariants } from "./Projects.variants";

export const Projects = (): JSX.Element => {
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
