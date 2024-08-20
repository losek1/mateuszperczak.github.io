import type { RefObject } from "react";

type GetCanvasAndContextReturn = {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
} | null;

export const getCanvasAndContext = (
  canvasRef: RefObject<HTMLCanvasElement>,
): GetCanvasAndContextReturn => {
  if (canvasRef.current === null) {
    return null;
  }

  const context = canvasRef.current.getContext("2d");

  if (context === null) {
    return null;
  }

  return { canvas: canvasRef.current, context };
};
