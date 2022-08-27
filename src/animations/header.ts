import type { Variants } from "framer-motion";

export const animatedHeader: Variants = {
  onscreen: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1,
    },
  },
};

export const animatedHeaderText: Variants = {
  offscreen: {
    y: 70,
    skewY: 10,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    skewY: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      mass: 1,
      restDelta: 0.01,
    },
  },
};
