const inverse =
  (f) =>
  (...args) =>
    1 - f(...args);

export const constantly = (x) => () => x;
export const zig = (r, c) => c;
export const zag = (r, c) => r;
export const classicAlternate = (r, c) => r + c;
export const classicSquare = (r, c) => r * c;
export const classicTruchet = () => Math.floor(Math.random() * 1000);

export const max = (r, c) => Math.max(r, c);
export const min = (r, c) => Math.min(r, c);

export const halfAndHalf = (r, c, w, height) => (c < w / 2 ? 0 : 1);
export const halfAndHalfInverse = inverse(halfAndHalf);

export const rowHalfAndHalf = (r, c, w, height) => halfAndHalf(c, r, height, w);
export const rowHalfAndHalfInverse = inverse(rowHalfAndHalf);

export const quarterLand = (r, c, w, height) =>
  (r < height / 2 && c < w / 2) || (r >= height / 2 && c >= w / 2) ? 1 : 0;
export const inverseQuarterLand = inverse(quarterLand);

export const diagonally = (r, c) => (r > c ? 0 : 1);
export const diagonallyInverse = inverse(diagonally);

export const circle = (r, c, w, height) => {
  const x = w / 2 - c;
  const y = height / 2 - r;
  const radius = Math.min(w / 2, height / 2);
  return Math.sqrt(x * x + y * y) > radius ? 1 : 0;
};

export const borderLands = (r, c, w, height) => {
  if (c >= w / 2) {
    return Math.random() > 0.9 ? 1 : 0;
  }
  return Math.random() > 0.1 ? (r + c) % 2 : 0;
};

export const gradually = (r, c, w, height) => {
  const noiseThreshold = c / w;
  return Math.random() >= noiseThreshold ? c : 0;
};

export const glitch =
  (f, threshold) =>
  (...args) =>
    Math.random() >= threshold ? f(...args) : 0;

export const leftRight = (left, right) => (r, c, w, height) =>
  c < w / 2 ? left(r, c, w, height) : right(r, c, w, height);

export const topBottom = (top, bottom) => (r, c, w, height) =>
  r < height / 2 ? top(r, c, w, height) : bottom(r, c, w, height);

export const wild =
  (f, cfg) =>
  (...args) =>
    cfg[f(...args) % cfg.length];
