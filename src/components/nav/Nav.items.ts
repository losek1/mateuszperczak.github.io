import Blog from "@icons/blog.svg?react";
import User from "@icons/user.svg?react";

import type { NavItemProps } from "./components/navItem/NavItem.types";

export const navItems: NavItemProps[] = [
  {
    name: "About me",
    to: "/aboutme",
    icon: User,
  },
  {
    name: "My projects",
    to: "/projects",
    icon: Blog,
  },
];
