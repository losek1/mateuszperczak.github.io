import { useCallback, useEffect, useRef, useState } from "react";

import { useAnimationFrame } from "..";
import { getCanvasAndContext, renderOrbit } from "./helpers";
import type { UseOrbitProps, UseOrbitState } from "./useOrbit.types";

export const useOrbit = ({ orbits }: UseOrbitProps) => {
  const [state, setState] = useState<UseOrbitState>({
    orbits,
    runRenderLoop: true,
  });
  // canvas ref
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useAnimationFrame((): void => {
    const canvasAndContext = getCanvasAndContext(canvasRef);
    if (canvasAndContext === null) {
      return;
    }

    const { canvas, context } = canvasAndContext;

    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // render orbits and icons
    state.orbits.forEach((orbit) => {
      renderOrbit({ context, color: "#aaaaaa", radius: orbit.radius });
    });

    // clear colliding context

    void (window.innerWidth < 950
      ? window.innerWidth < 768
        ? context.clearRect(0, 300, context.canvas.width, context.canvas.height)
        : context.clearRect(0, 0, 70, context.canvas.height)
      : undefined);
  });

  // const _render: FrameRequestCallback = (time): void => {
  //   const canvasAndContext = getCanvasAndContext(canvasRef);
  //   if (canvasAndContext === null) {
  //     return;
  //   }

  //   const { canvas, context } = canvasAndContext;

  //   // clear canvas
  //   context.clearRect(0, 0, canvas.width, canvas.height);

  //   // render orbits and icons
  //   state.orbits.forEach((orbit) => {
  //     renderOrbit({ context, color: "#aaaaaa", radius: orbit.radius });
  //   });

  //   // clear colliding context

  //   void (width < 950
  //     ? width < 768
  //       ? context.clearRect(0, 300, context.canvas.width, context.canvas.height)
  //       : context.clearRect(0, 0, 70, context.canvas.height)
  //     : undefined);
  // };

  useEffect(() => {
    if (canvasRef.current === null) return;

    if (!(canvasRef.current instanceof HTMLCanvasElement))
      throw new Error("ref is not a HTMLCanvasElement");

    // let angle = 0;

    // const update = (): void => {
    //   context.clearRect(0, 0, canvas.width, canvas.height);

    //   renderOrbit(context, { radius: 120 });
    //   renderOrbit(context, { radius: 140 });

    //   const distance = 120; // from the centre of orbit
    //   const radians = angle * (Math.PI / 180);

    //   const x = Math.cos(radians) * distance;
    //   const y = Math.sin(radians) * distance;

    //   context.strokeStyle = "#fff";
    //   context.beginPath();
    //   context.ellipse(
    //     x + canvas.width / 2,
    //     y + canvas.height / 2,
    //     5,
    //     5,
    //     0,
    //     0,
    //     Math.PI * 2,
    //   );
    //   context.fillStyle = "#fff";
    //   context.fill();
    //   context.closePath();
    //   context.stroke();
    //   angle += 0.3; // rotation speed in degrees per frame
    //   if (angle >= 360) {
    //     angle = 0;
    //   }
    //   context.clearRect(0, 300, context.canvas.width, context.canvas.height);
    //   window.requestAnimationFrame(update);
    // };

    // update();
  }, []);

  return [canvasRef, {}] as const;
};
