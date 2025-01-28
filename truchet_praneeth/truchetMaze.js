const chars = ([char, line]) =>
  [
    [" /", "\\ "],
    ["/ ", " \\"],
  ]
    .at(line)
    .at(char);

const nextChar = ([index, line]) => [index, (line + 1) % 2];

const printPattern = (HEIGHT, WIDTH) => {
  let pattern = "";

  for (let count = 0; count < HEIGHT; count++) {
    const lines = [];

    for (let index = 0; index < WIDTH; index++) {
      lines.push([Math.floor(Math.random() * 2), 1]);
    }

    pattern += lines.map(chars).join("") + "\n";
    pattern += lines.map(nextChar).map(chars).join("") + "\n";
  }

  return pattern;
};

console.log(printPattern(10, 20));

export { printPattern, nextChar };
