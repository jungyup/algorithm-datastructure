/**
 * @param {number[][]} grid
 * @return {number}
 */
 var islandPerimeter = function(grid) {
    // constraints
    // what if the grid is out of bound?
    // what if there is no island at all
    
    // check for empty grid
    if (grid.length < 1) {
        return 0;
    }
    
    // declare row & column const value for readbility
    const rows = grid.length;
    const columns = grid[0].length;
    
    let islandPerimeter = 0;
    
    // double loop to find island and subtract perimeter if neighbour land is found
    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            if (grid[row][column] === 1) {
                // add island perimiter
                islandPerimeter += 4;
                
                // subtract perimeter if neighbour land is found
                if (row > 0 && grid[row-1][column]) islandPerimeter--;
                if (row < rows - 1 && grid[row+1][column]) islandPerimeter--;
                if (column > 0 && grid[row][column-1]) islandPerimeter--;
                if (column < columns - 1 && grid[row][column+1]) islandPerimeter--;
            }
        }
    }
    
    return islandPerimeter;
};
