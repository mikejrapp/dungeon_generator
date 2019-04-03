import React from 'react';

const Grid = (props) =>{
    return(
        <div className={props.className}>
            {props.tiles}
            {props.obstacles}
        </div>
    )
};

export default Grid;