import React from 'react';
import {getGridColumnNumber, getGridRowNumber, getRandomInt} from './functions';

const Obstacle = (props) => {
    const {className} = props.obstacle;
    const {image} = props.obstacle;
    const columnTotal = getGridColumnNumber();
    const rowTotal = getGridRowNumber();
    const startingPositionY = getRandomInt(0, columnTotal - props.obstacle.width) + 1;
    const startingPositionX = getRandomInt(0, rowTotal - props.obstacle.height) + 1;

    const style = {
        backgroundImage: `url(${image})`,
        gridColumnStart: startingPositionY,
        gridColumnEnd: startingPositionY + props.obstacle.width,
        gridRowStart: startingPositionX,
        gridRowEnd: startingPositionX + props.obstacle.height
    };

    console.log(style);

    return(
        <div className={className} style={style}>

        </div>
    )
};

export default Obstacle;