import type { FC } from "react";

export type OrbitProps = {
  size: number;
  direction?: "normal" | "reverse";
  duration?: number;
  icon?: FC;
};
