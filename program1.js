const getTotalIsles = function (grid) {
  function countIslands(map) {
    if (!map || map.length === 0) return 0;

    const rows = map.length;
    const cols = map[0].length;
    let islandCount = 0;

    const dfs = (row, col) => {
        // Check for out-of-bounds and water
        if (row < 0 || row >= rows || col < 0 || col >= cols || map[row][col] === 'W') {
            return;
        }
        
        // Mark the land as visited by changing it to 'W'
        map[row][col] = 'W';

        // Explore all four possible directions (up, down, left, right)
        dfs(row + 1, col); // down
        dfs(row - 1, col); // up
        dfs(row, col + 1); // right
        dfs(row, col - 1); // left
    };

    // Iterate through the entire map
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // If we find land, we have found a new island
            if (map[i][j] === 'L') {
                islandCount++;
                // Use DFS to mark all land connected to this piece
                dfs(i, j);
            }
        }
    }

    return islandCount;
}

// Test cases
console.log(countIslands([
    ["L","L","L","L","W"],
    ["L","L","W","L","W"],
    ["L","L","W","W","W"],
    ["W","W","W","W","W"],
])); // Output: 1

console.log(countIslands([
    ["L","L","W","W","W"],
    ["L","L","W","W","W"],
    ["W","W","L","W","W"],
    ["W","W","W","L","L"],
])); // Output: 3


  

};

module.exports = getTotalIsles;