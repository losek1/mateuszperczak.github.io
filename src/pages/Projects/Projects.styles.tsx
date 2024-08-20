import AnimationProvider from "@components/animationProvider/AnimationProvider";
import styled from "@emotion/styled";
import { memo } from "react";

const StyledProjectsAnimationProvider = styled(AnimationProvider)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
  gap: 20px;
  padding: 20px;
`;

export default memo(StyledProjectsAnimationProvider);
