import React from 'react';
import TileRow from './TileRow';

const Grid = (props) =>{
    const {grid} = props;

    return(
        <table className={props.className}>
            <tbody>
                {grid.map( (row, i) => <TileRow row={row} key={i}/>)}
            </tbody>
        </table>
    )
};

export default Grid;