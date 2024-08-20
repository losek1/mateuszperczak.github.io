import { random } from "lodash";
import { type CSSProperties, useMemo } from "react";

import StyledOrbit from "./Orbit.styles";
import type { OrbitProps } from "./Orbit.types";

const Orbit = ({
  size,
  direction,
  duration,

  icon: Icon,
}: OrbitProps): JSX.Element => {
  const style = useMemo(
    () =>
      ({
        width: `${size * 100}%`,
        height: `${size * 100}%`,
        top: `-${(size * 100 - 100) / 2}%`,
        left: `-${(size * 100 - 100) / 2}%`,
        animationDuration: `${duration ?? random(5, 10, true)}s`,
        animationDirection: direction ?? "normal",
      } as CSSProperties),
    [size, duration],
  );

  return (
    <StyledOrbit style={style}>
      <div
        className="orbit-children"
        style={{
          animationDuration: style.animationDuration,
          animationDirection:
            style.animationDirection === "normal" ? "reverse" : "normal",
        }}
      >
        {Icon && <Icon />}
      </div>
    </StyledOrbit>
  );
};

export default Orbit;
