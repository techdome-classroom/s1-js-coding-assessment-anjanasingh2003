const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  const dfs = (r, c) => {
      // Check bounds and if the cell is water or already visited
      if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W' || visited[r][c]) {
          return;
      }
      // Mark the current cell as visited
      visited[r][c] = true;

      // Explore the four possible directions
      dfs(r + 1, c); // Down
      dfs(r - 1, c); // Up
      dfs(r, c + 1); // Right
      dfs(r, c - 1); // Left
  };

  let islandCount = 0;

  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (grid[r][c] === 'L' && !visited[r][c]) {
              // Found a new island
              islandCount++;
              // Start DFS to mark all connected landmasses
              dfs(r, c);
          }
      }
  }

  return islandCount;
};

module.exports = getTotalIsles;