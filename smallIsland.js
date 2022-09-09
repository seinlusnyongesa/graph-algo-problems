let grid = [
  ["W", "L", "W", "W", "L", "W"],
  ["L", "L", "W", "W", "L", "W"],
  ["W", "L", "W", "W", "W", "W"],
  ["W", "W", "W", "L", "L", "W"],
  ["W", "L", "W", "L", "L", "W"],
  ["W", "W", "W", "W", "W", "W"],
];
const smalletIsland = (grid) => {
  const visited = new Set();
  let smallest = Infinity;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      let islandSize = traverse(grid, r, c, visited);
      if (smallest > islandSize && islandSize > 0) {
        smallest = islandSize;
      }
    }
  }
  return smallest;
};

const traverse = (grid, r, c, visited) => {
  const rowBounds = 0 <= r && r < grid.length;
  const colBounds = 0 <= c && c < grid[0].length;
  if (!rowBounds || !colBounds) return 0;

  if (grid[r][c] === "W") return 0;

  let pos = r + "," + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let count = 1;
  count += traverse(grid, r - 1, c, visited);
  count += traverse(grid, r + 1, c, visited);
  count += traverse(grid, r, c - 1, visited);
  count += traverse(grid, r, c + 1, visited);

  return count;
};

console.log(smalletIsland(grid));
