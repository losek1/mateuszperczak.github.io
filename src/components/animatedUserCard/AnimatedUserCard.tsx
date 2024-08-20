import { useOrbit } from "@hooks/index";
import { m } from "framer-motion";
import { memo } from "react";

import { orbits } from "./AnimatedUserCard.orbits";
import { StyledAnimatedUserCard } from "./AnimatedUserCard.styles";
import {
  userAvatarVariants,
  userCanvasVariants,
  userCardVariants,
} from "./AnimatedUserCard.variants";

export const AnimatedUserCard = (): JSX.Element => {
  const [ref] = useOrbit({
    orbits,
  });

  return (
    <StyledAnimatedUserCard variants={userCardVariants}>
      <m.div className="user-avatar" variants={userAvatarVariants}>
        <m.canvas width={400} height={400} ref={ref} variants={userCanvasVariants} />
      </m.div>
      <m.div className="user-label" variants={userAvatarVariants}>
        <span>Hi 👋, I&apos;m Mateusz.</span>
        <span className="user-label-description">
          I am a self-taught Web & Desktop Developer. 👨🏼‍💻
        </span>
        <span className="user-label-other">Also i&apos;m learning backend rn</span>
      </m.div>
    </StyledAnimatedUserCard>
  );
};

// AnimatedUserCard.displayName = "AnimatedUserCard";
