import React from 'react';

const Grid = (props) =>{
    return(
        <table className={props.className}>
            {props.tiles}
        </table>
    )
};

export default Grid;