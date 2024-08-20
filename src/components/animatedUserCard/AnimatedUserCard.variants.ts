import type { Variants } from "framer-motion";

export const userCardVariants: Variants = {
  animate: {
    transition: {
      delayChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const userAvatarVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      type: "spring",
      duration: 0.3,
      bounce: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      type: "spring",
      duration: 0.3,
    },
  },
};

export const userCanvasVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 1.1,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.3,
      bounce: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.3,
    },
  },
};
