export const getGridColumnNumber = () => {
    const htmlStyles = window.getComputedStyle(document.querySelector("html"));
    return parseInt(htmlStyles.getPropertyValue("--colNum"));
};

export const getGridRowNumber = () => {
    const htmlStyles = window.getComputedStyle(document.querySelector("html"));
    return parseInt(htmlStyles.getPropertyValue("--rowNum"));
};

export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getStyle = (obstacle) => {
    const {image, width, height} = obstacle;
    const columnTotal = getGridColumnNumber();
    const rowTotal = getGridRowNumber();
    const startingPositionY = getRandomInt(0, columnTotal - width) + 1;
    const startingPositionX = getRandomInt(0, rowTotal - height) + 1;

    return {
        backgroundImage: `url(${image})`,
        gridColumnStart: startingPositionY,
        gridColumnEnd: startingPositionY + width,
        gridRowStart: startingPositionX,
        gridRowEnd: startingPositionX + height
    }
};