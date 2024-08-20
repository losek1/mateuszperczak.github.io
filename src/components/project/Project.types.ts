import type { MotionProps } from "framer-motion";
import type { HTMLAttributes } from "react";

export type ProjectPropsWithAttributes = ProjectProps &
  HTMLAttributes<HTMLDivElement> &
  MotionProps;

export type ProjectProps = {
  image: string;
  name: string;
  type: ProjectType;
  links?: {
    demo?: string;
    repository?: string;
  };
};

export type ProjectType = "web" | "desktop";
