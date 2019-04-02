import React from 'react';

const Grid = (props) =>{
    return(
        <div className={props.className}>
            {props.obstacles}
        </div>
    )
};

export default Grid;