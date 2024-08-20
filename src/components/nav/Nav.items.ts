import Blog from "@icons/blog.svg?react";
import Bullhorn from "@icons/bullhorn.svg?react";
import User from "@icons/user.svg?react";

import type { NavItemProps } from "./components/navItem/NavItem.types";

export const navItems: NavItemProps[] = [
  {
    name: "About me",
    to: "/aboutme",
    icon: User,
  },
  {
    name: "Updates",
    to: "/updates",
    icon: Bullhorn,
  },
  {
    name: "Projects",
    to: "/projects",
    icon: Blog,
  },
];
