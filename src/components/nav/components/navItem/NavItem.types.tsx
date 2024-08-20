import type { FC, HTMLAttributes } from "react";

export type NavItemProps = {
  name: string;
  to: string;
  icon: FC;
} & HTMLAttributes<HTMLAnchorElement>;
