import React from 'react';

const TileRow = (props) => {
    const {row} = props;

    return(
        <tr>
            {row.map( (tile, i) => tile !== ' ' ? <td className={tile} key={i}> </td> : <td className={'tile'} key={i}> </td>)}
        </tr>
    )
};

export default TileRow;