import React, {Component} from 'react';

const Grid = (props) =>{
    return(
        <div className={"grid"}>
            {props.obstacles}
        </div>
    )
};

export default Grid;