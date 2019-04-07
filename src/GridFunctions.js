const table = {
    "grid": [
        Array(3),
        Array(3),
        Array(3)
    ]
};

const chest = {
    "grid": [
        Array(2),
        Array(2)
    ]
};

const getGrid = (rowNumbers, columnNumbers) => {
    const grid = Array(rowNumbers);
    const row = Array(columnNumbers);
    const fillStart = 0;
    const fillValue = ' ';

    return grid.fill(
        row.fill(
            fillValue,
            fillStart,
            columnNumbers
        ),
        fillStart,
        rowNumbers
    );
};

const insertObstacle = (insertPosition, grid, obstacle) => {
    return grid.map( (row, i) => {
        row = row.map((tile, j) => {
            return getObstacle([i,j], insertPosition, grid, obstacle);
        });
        return row
    });
};

const getObstacle = (tile = [0, 0], insertPosition = [0, 0], grid, obstacle) => {
    const obstacleRows = obstacle.grid.length;
    const obstacleColumns = obstacle.grid[0].length;
    const endPoints = [
        insertPosition[0] + obstacleRows,
        insertPosition[1] + obstacleColumns
    ];
    const currentRow = tile[0];
    const currentColumn = tile[1];

    if(isPlaceable(tile, insertPosition, endPoints, grid)){
        return 'x';
    }
    else return grid[currentRow][currentColumn];
};

const withinObstacleBoundries = (gridPosition, insertPoint, endPoint) => {
    return gridPosition >= insertPoint && gridPosition < endPoint;
};

const isPlaceable = (section, insertPoints, endPoints, grid) => {
    return withinObstacleBoundries(section[0], insertPoints[0], endPoints[0])
        && withinObstacleBoundries(section[1], insertPoints[1], endPoints[1])
        && noCollision(section[0], section[1], grid);
};

const noCollision = (currentRow, currentColumn, grid) => {
    return grid[currentRow][currentColumn] === ' ';
};

const findRowWithSpace = (row, grid, obstacle, buffer) => {
    const emptyTiles = getEmptyTiles(grid[row]);

    return emptyTiles.length >= (obstacle.grid[0].length + buffer * 2) ? row : findRowWithSpace(row + 1, grid, obstacle, buffer);
};

const getEmptyTiles = (row) => {
    return row.filter( tile => tile !== 'x');
};


const grid = getGrid(10, 10, ' ');
const updatedGrid = insertObstacle( [0,0], grid, table);
const newGrid = insertObstacle([0,4], updatedGrid, chest);

console.log(findRowWithSpace(1, updatedGrid, table, 3));