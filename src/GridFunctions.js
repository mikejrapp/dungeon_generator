const table = {
    "grid": [
        Array(3),
        Array(3),
        Array(3)
    ],
    "key": "TL"
};

const chest = {
    "grid": [
        Array(2),
        Array(2)
    ],
    "key": "LG"
};

const barrel = {
    "grid": [
        Array(1)
    ]
};

const obstacles = [table, chest, barrel];

const insertObstacle = (insertPosition, grid, obstacle) => {
    if(isInsertValid(insertPosition, grid, obstacle)){
        return grid.map( (row, i) => {
            row = row.map((tile, j) => {
                return getObstacle([i,j], insertPosition, grid, obstacle);
            });
            return row
        });
    }

    return false;
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

    if(isPlaceable(tile, insertPosition, endPoints, grid, obstacle)){
        return obstacle.key;
    }
    else return grid[currentRow][currentColumn];
};

const withinObstacleBoundries = (gridPosition, insertPoint, endPoint) => {
    return gridPosition >= insertPoint && gridPosition < endPoint;
};

const isPlaceable = (section, insertPoints, endPoints, grid, obstacle) => {
    return withinObstacleBoundries(section[0], insertPoints[0], endPoints[0])
        && withinObstacleBoundries(section[1], insertPoints[1], endPoints[1])
        && isInsertValid(insertPoints, grid, obstacle);
};

const findRowWithSpace = (row, grid, obstacle, buffer = 0) => {
    const emptyTiles = getEmptyTiles(grid[row]);

    return checkSpace(emptyTiles, obstacle, buffer) ? row : findRowWithSpace(row + 1, grid, obstacle, buffer);
};

const getObstacleLocations = (grid, row = 0) => {
    return grid.map( (tile, i) => findBlockedTiles(i, grid)).filter( (tile, i) => i >= row);
};

const checkSpace = (emptyTiles, obstacle, buffer = 0) => {
    return emptyTiles.length >= (obstacle.grid[0].length + buffer * 2);
};

const getEmptyTiles = (row) => {
    return row.filter( tile => tile === ' ');
};

const findBlockedTiles = (row, grid) => {
    if(grid[row].find( element => element !== ' ')){
        return Array.from(grid[row].entries()).filter( tile => tile[1] !== ' ').map( tile => tile[0]);
    }

    return [];
};

const isInsertValid = (insertPoint, grid, obstacle) => {
    const insertRow = insertPoint[0];
    const obstalceLocations = getObstacleLocations(grid);
    const insertColumn = insertPoint[1];
    const obstacleEndRow = (obstacle.grid.length - 1) + insertRow;

    if(isWiderThanGrid(insertColumn, grid, obstacle) || isTallerThanGrid(insertRow, grid, obstacle)){
        console.warn('out of bounds');
        return false;
    }

    for(let i = 0; i < obstacle.grid.length; i++){
        //check the rows and if the first insert column is filled, return false.
        if(obstalceLocations[insertRow + i].includes(insertColumn)){
            console.warn('collision');
            return false;
        }

        for(let j = 0; j < obstacle.grid[0].length; j++){
            //if the first isn't filled, check the rest of the columns on each row.
            if(obstalceLocations[insertRow + i].includes(insertColumn + j)){
                console.warn('collision');
                return false;
            }
        }
    }

    return true;
};

const isWiderThanGrid = (insertColumn, grid, obstacle) => {
    return insertColumn + obstacle.grid[0].length > grid[0].length;
};

const isTallerThanGrid = (insertRow, grid, obstacle) => {
    return insertRow + obstacle.grid.length > grid.length;
};

const getInsertPoint = (grid, obstacle) => {
    const insertRow = getRandomInt(0, (grid.length) - (obstacle.grid.length));
    const insertColumn = getRandomInt(0, (grid[0].length) - (obstacle.grid[0].length));

    return [insertRow, insertColumn];
};

const getNewRow = (currentRow, grid, obstacle) =>{
    const newRow = currentRow + getRandomInt(0, 1);

    if(!isTallerThanGrid(newRow, grid, obstacle)){
        return newRow;
    }

    return currentRow;
};

const getNewColumn = (currentColumn, grid, obstacle) => {
    const newColumn = currentColumn + getRandomInt(0, 1);

    if(!isWiderThanGrid(newColumn, grid, obstacle)){
        return newColumn;
    }

    return currentColumn;
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getGridColumnNumber = () => {
    const htmlStyles = window.getComputedStyle(document.querySelector("html"));
    return parseInt(htmlStyles.getPropertyValue("--colNum"));
};

const getGridRowNumber = () => {
    const htmlStyles = window.getComputedStyle(document.querySelector("html"));
    return parseInt(htmlStyles.getPropertyValue("--rowNum"));
};

export const getGrid = (rowNumbers, columnNumbers) => {
    const grid = Array(getGridRowNumber());
    const row = Array(getGridColumnNumber());
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

export const populateGrid = (grid, obstacles, startingObstacle = 0) =>{
    if(startingObstacle >= obstacles.length){
        return grid;
    }

    const updatedGrid = insertObstacle(getInsertPoint(grid, obstacles[startingObstacle]), grid, obstacles[startingObstacle]);

    if(updatedGrid){
        return populateGrid(updatedGrid, obstacles, startingObstacle += 1);
    }
    else{
        return populateGrid(grid, obstacles, startingObstacle);
    }
};