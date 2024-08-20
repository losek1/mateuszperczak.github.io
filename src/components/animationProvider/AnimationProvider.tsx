import { m } from "framer-motion";

import type { AnimationProviderProps } from "./AnimationProvider.types";

export const AnimationProvider = (props: AnimationProviderProps): JSX.Element => (
  <m.section {...props} />
);
