import type { FC } from "react";
import StyledProjectHeader, {
  StyledProjectTitle,
  StyledProjectType,
  StyledProjectWrapper,
} from "./ProjectHeader.styles";
import type { ProjectHeaderProps } from "./ProjectHeader.types";
import NextButton from "@components/nextButton/NextButton";

const ProjectHeader: FC<ProjectHeaderProps> = ({
  name,
  type,
  to,
}: ProjectHeaderProps): JSX.Element => {
  return (
    <StyledProjectHeader>
      <StyledProjectWrapper>
        <StyledProjectTitle>{name}</StyledProjectTitle>
        <StyledProjectType>{type}</StyledProjectType>
      </StyledProjectWrapper>
      <NextButton to={to} text="See more" aria-label="See more" />
    </StyledProjectHeader>
  );
};
export default ProjectHeader;
