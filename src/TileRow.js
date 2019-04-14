import React from 'react';

const TileRow = (props) => {
    const {row} = props;

    return(
        <tr>
            {row.map( (tile, i) => tile === 'x' ? <td className={'blocked'} key={i}> </td> : <td key={i}> </td>)}
        </tr>
    )
};

export default TileRow;