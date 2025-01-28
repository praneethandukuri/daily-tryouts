# Truchet Tile Generator

This project generates Truchet tiles using customizable tile patterns and algorithms. The program creates ASCII art tiles based on the width, height, and tile generation function you specify.

## Features

- Multiple tile generation algorithms (e.g., `zig`, `zag`, `classicTruchet`, `halfAndHalf`, etc.).
- Configurable grid size.
- ASCII-based Truchet tile patterns.

## Files

- **`truchetMain.js`**: Entry point for the program. Specifies the grid size and tile generation algorithm.
- **`truchet.js`**: Core logic for generating tiles based on a specified tile set and algorithm.
- **`tileGenerators.js`**: Collection of algorithms for generating tile patterns.

## Requirements

- [Deno](https://deno.land/) (JavaScript and TypeScript runtime).

## Usage

1. Clone this repository and navigate to the directory.
2. Run the program using Deno:
   ```bash
   deno run --allow-read truchetMain.js <width> <height>
   ```

Replace `<width>` and `<height>` with the desired grid dimensions (e.g., `10 5`).

3. By default, the `classicTruchet` algorithm is used. You can modify the `tileGenerator` variable in `truchetMain.js` to use any of the other algorithms available in `tileGenerators.js`.

### Example

Running:

```bash
deno truchetMain.js 4 4
```

Might produce:

```
 \/ /  \
\  / /\
 \/  \ \
\  /\ \
 \ \ \ \
\ \ \ \
/  \/  \
 /\  /\

```

## Tile Generators

Here are some algorithms you can use for generating patterns:

- **`classicTruchet`**: Randomly assigns a tile to each position.
- **`zig`**: Patterns based on the column number.
- **`zag`**: Patterns based on the row number.
- **`halfAndHalf`**: Splits the grid into two halves.
- **`circle`**: Creates circular patterns based on distance from the center.
- **`borderLands`**: Adds random variations to tile patterns.

Refer to `tileGenerators.js` for the full list of available algorithms.

## Customization

You can modify the tile set by changing the `defaultTileSet` in `truchet.js`. By default, it uses:

```javascript
[
  ['/ ', ' /'],
  [' \\', '\\ '],
];
```

## Goals

- Encourage exploration of how simple algorithms can produce a vast array of patterns and outputs.
- Create their own `tileGenerators` and `tileSets` to expand the variety of Truchet tiles.
