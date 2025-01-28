export const defaultTileSet = [
  ["/ ", " /"],
  [" \\", "\\ "],
];

const concatLines = (lines1, lines2) =>
  lines1.map((line, i) => line + lines2[i]);

export const generateTiles = (
  width,
  height,
  tileGenerator,
  tileSet = defaultTileSet
) => {
  const lines = [];
  for (let row = 0; row < height; row++) {
    let tileLines = Array.from(tileSet[0]).fill("");
    for (let col = 0; col < width; col++) {
      const tile = tileGenerator(row, col, width, height);
      const tileId = tile % tileSet.length;
      tileLines = concatLines(tileLines, tileSet[tileId]);
    }
    lines.push(...tileLines);
  }
  return lines.join("\n");
};
