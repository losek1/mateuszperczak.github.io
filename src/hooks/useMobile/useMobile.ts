import { useEffect, useState } from "react";
import { debounceTime, fromEvent } from "rxjs";

export const useMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const subscription = fromEvent(window, "resize")
      .pipe(debounceTime(200))
      .subscribe(() => setIsMobile(window.innerWidth < 768));
    return (): void => subscription.unsubscribe();
  }, []);

  return isMobile;
};
// import { useEffect, useMemo } from "react";
// import { fromEvent } from "rxjs";

// const useWindowDimensionsListener = () => {
//   const isMobileListener: MediaQueryList = useMemo(() => {
//     return window.matchMedia("(max-width: 768px)");
//   }, []);
//   const isTableListener: MediaQueryList = useMemo(() => {
//     return window.matchMedia("(max-width: 1024px) and (min-width: 769px)");
//   }, []);
//   useEffect(() => {
//     const isMobileListenerSubscription = fromEvent(
//       isMobileListener,
//       "change",
//     ).subscribe(() => {
//       console.log(isMobileListener.matches, "jestem telefonem");
//     });
//     const isTabletListenerSubscription = fromEvent(
//       isTableListener,
//       "change",
//     ).subscribe(() => {
//       console.log(isTableListener.matches, "jestem tabletem");
//     });
//     return (): void => {
//       isMobileListenerSubscription.unsubscribe();
//       isTabletListenerSubscription.unsubscribe();
//     };
//   }, []);
// };

//  useWindowDimensionsListener;
