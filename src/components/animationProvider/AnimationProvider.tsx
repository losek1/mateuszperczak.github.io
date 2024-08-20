import { m } from "framer-motion";

import type { AnimationProviderProps } from "./AnimationProvider.types";

const AnimationProvider = (props: AnimationProviderProps): JSX.Element => (
  <m.section {...props} />
);

export default AnimationProvider;
