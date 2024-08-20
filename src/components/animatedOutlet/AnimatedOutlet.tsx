import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import { OutletWrapper, StaticOutlet } from "./components";

export const AnimatedOutlet = (): JSX.Element => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <OutletWrapper key={location.pathname}>
        <StaticOutlet />
      </OutletWrapper>
    </AnimatePresence>
  );
};
