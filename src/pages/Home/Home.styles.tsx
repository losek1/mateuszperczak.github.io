import AnimationProvider from "@components/animationProvider/AnimationProvider";
import styled from "@emotion/styled";
import { memo } from "react";

const StyledHomeAnimationProvider = styled(AnimationProvider)`
  display: grid;
  flex: 1;
  place-items: center;
`;

export default memo(StyledHomeAnimationProvider);
