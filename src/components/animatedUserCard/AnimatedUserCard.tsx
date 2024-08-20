import { memo } from "react";

import StyledAnimatedUserCard from "./AnimatedUserCard.styles";
import { userAvatarVariants, userCardVariants } from "./AnimatedUserCard.variants";
import useOrbit from "@hooks/useOrbit/useOrbit";
import { m } from "framer-motion";

const AnimatedUserCard = (): JSX.Element => {
  const [ref] = useOrbit();

  return (
    <StyledAnimatedUserCard variants={userCardVariants}>
      <m.div className="user-avatar" variants={userAvatarVariants}>
        <canvas width={400} height={400} ref={ref} />
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

export default memo(AnimatedUserCard);
