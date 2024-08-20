import { useEffect, useRef } from "react";

type Orbit = {
  radius: number;
};

const useOrbit = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const renderOrbit = (context: CanvasRenderingContext2D, { radius }: Orbit): void => {
    context.strokeStyle = "#aaaaaa";
    context.beginPath();
    context.arc(
      context.canvas.width / 2,
      context.canvas.height / 2,
      radius,
      0,
      Math.PI * 2,
    );
    context.closePath();
    context.setLineDash([4]);
    context.stroke();
    context.setLineDash([0]);
  };

  useEffect(() => {
    if (canvasRef.current === null) return;

    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");

    if (context === null) return;

    let angle = 0;

    const update = (): void => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      renderOrbit(context, { radius: 120 });
      renderOrbit(context, { radius: 140 });

      const distance = 120; // from the centre of orbit
      const radians = angle * (Math.PI / 180);

      const x = Math.cos(radians) * distance;
      const y = Math.sin(radians) * distance;

      context.strokeStyle = "#fff";
      context.beginPath();
      context.ellipse(
        x + canvas.width / 2,
        y + canvas.height / 2,
        5,
        5,
        0,
        0,
        Math.PI * 2,
      );
      context.fillStyle = "#fff";
      context.fill();
      context.closePath();
      context.stroke();
      angle += 0.5; // rotation speed in degrees per frame

      window.requestAnimationFrame(update);
    };

    update();
  }, []);

  return [canvasRef] as const;
};

export default useOrbit;
