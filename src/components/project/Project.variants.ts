import type { Variants } from "framer-motion";

export const projectVariants: Variants = {
  // initial: { y: 100, opacity: 0 },
  // animate: {
  //   y: 0,
  //   opacity: 1,
  //   transition: {
  //     type: "tween",
  //     duration: 0.6,
  //     ease: [0.12, 0.23, 0.5, 1],
  //   },
  // },
  // exit: {
  //   y: -100,
  //   opacity: 0,
  //   transition: {
  //     type: "tween",
  //     duration: 0.3,
  //   },
  // },
  initial: {
    opacity: 0,
    // y: 50,
    scale: 0.95,
  },
  animate: {
    // opacity: 1,
    // y: 0,
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
    scale: 0.95,
    transition: {
      type: "spring",
      duration: 0.3,
    },
  },
};
