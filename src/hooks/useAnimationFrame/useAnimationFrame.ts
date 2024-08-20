import { useEffect, useRef } from "react";

export const useAnimationFrame = (callback: (deltaTime: number) => void): void => {
  const requestRef = useRef(0);
  const previousTimeRef = useRef(0);

  const animate: FrameRequestCallback = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
};
