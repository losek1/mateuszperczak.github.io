import { m } from "framer-motion";

import { StyledAnimatedUserCard } from "./AnimatedUserCard.styles";
import {
  userAvatarVariants,
  userCardVariants,
  userLabelVariants,
  userTextVariants,
} from "./AnimatedUserCard.variants";

export const AnimatedUserCard = (): JSX.Element => {
  return (
    <StyledAnimatedUserCard variants={userCardVariants}>
      <m.div className="user-avatar" variants={userAvatarVariants} />
      <m.div className="user-label" variants={userLabelVariants}>
        <m.span variants={userTextVariants}>Hi 👋, I&apos;m Mateusz.</m.span>
        <m.span variants={userTextVariants} className="user-label-description">
          I am a self-taught Web & Desktop Developer. 👨🏼‍💻
        </m.span>
        <m.span variants={userTextVariants} className="user-label-other">
          I&apos;m also learning backend rn.
        </m.span>
      </m.div>
    </StyledAnimatedUserCard>
  );
};

// AnimatedUserCard.displayName = "AnimatedUserCard";
