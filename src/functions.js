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