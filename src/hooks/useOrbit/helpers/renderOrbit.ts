import type { Orbit } from "../useOrbit.types";

export const renderOrbit = ({
  color,
  context,
  radius,
}: {
  context: CanvasRenderingContext2D;
  color: string;
} & Pick<Orbit, "radius">): void => {
  context.strokeStyle = color;
  context.setLineDash([4]);
  context.beginPath();
  context.arc(
    context.canvas.width / 2,
    context.canvas.height / 2,
    radius,
    0,
    Math.PI * 2,
  );
  context.closePath();
  context.stroke();
  context.setLineDash([0]);
};
