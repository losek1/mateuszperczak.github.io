import { useEffect, useRef } from "react";

export const useAnimationFrame = (callback: (time: number) => void): void => {
  const requestRef = useRef(0);
  // const previousTimeRef = useRef(0);

  const animate: FrameRequestCallback = (time: number) => {
    callback(time);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
};
