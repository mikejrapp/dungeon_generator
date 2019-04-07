import React from 'react';

const TileRow = (props) => {
    const {tiles, style} = props;

    return(
        <tr>
            {tiles.map( tile => <td style={style}>

            </td>)}
        </tr>
    )
};

export default TileRow;