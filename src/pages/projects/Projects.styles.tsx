import { AnimationProvider } from "@components/index";
import styled from "@emotion/styled";

export const StyledProjectsAnimationProvider = styled(AnimationProvider)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
  gap: 20px;
  padding: 20px;
`;
