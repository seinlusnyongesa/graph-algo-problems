let grid = [
  ["W", "L", "W", "W", "L", "W"],
  ["L", "L", "W", "W", "L", "W"],
  ["W", "L", "W", "W", "W", "W"],
  ["W", "W", "W", "L", "L", "W"],
  ["W", "L", "W", "L", "L", "W"],
  ["W", "W", "W", "W", "W", "W"],
];
const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (traverse(grid, r, c, visited) === true) count += 1;
    }
  }
  return count;
};
const traverse = (grid, r, c, visited) => {
  const rowBounds = 0 <= r && r < grid.length;
  const colBounds = 0 <= c && c < grid[0].length;
  if (!rowBounds || !colBounds) return false;

  let pos = r + "," + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  console.log(visited);

  if (grid[r][c] === "W") return false;

  traverse(grid, r - 1, c, visited);
  traverse(grid, r + 1, c, visited);
  traverse(grid, r, c - 1, visited);
  traverse(grid, r, c + 1, visited);

  return true;
};

console.log(islandCount(grid));
