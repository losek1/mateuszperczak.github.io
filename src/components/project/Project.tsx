import Github from "@icons/github.svg?react";
import Link from "@icons/link.svg?react";
import { memo } from "react";

import { projectTypeMapper } from "./Project.mappers";
import StyledProject, { StyledProjectLink, StyledProjectType } from "./Project.styles";
import type { ProjectPropsWithAttributes } from "./Project.types";
import { projectVariants } from "./Project.variants";

const Project = ({
  image,
  name,
  type,
  links,
  ...rest
}: ProjectPropsWithAttributes): JSX.Element => {
  return (
    <StyledProject {...rest} variants={projectVariants}>
      <div className="project-image" style={{ backgroundImage: `url(${image})` }} />
      <div className="project-bottom">
        <div className="project-info">
          <p className="project-name">{name}</p>
          <StyledProjectType type={type}>
            {`${projectTypeMapper[type] ?? "Unknown"}`}
          </StyledProjectType>
        </div>
        {links && (
          <div className="project-links">
            {links.repository && (
              <StyledProjectLink
                href={links.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Github</span>
                <Github />
              </StyledProjectLink>
            )}
            {links.demo && (
              <StyledProjectLink
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
                <Link />
              </StyledProjectLink>
            )}
          </div>
        )}
      </div>
    </StyledProject>
  );
};

export default memo(Project);
