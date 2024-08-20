export type Orbit = {
  radius: number;
  startingAngle: number;
  rotationSpeed: number;
  icons?: string[];
};

export type UseOrbitProps = {
  orbits: Orbit[];
};

export type UseOrbitState = {
  orbits: Orbit[];
  runRenderLoop: boolean;
};
