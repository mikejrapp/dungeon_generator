import React from 'react';

const Obstacle = (props) => {
    const {className} = props.obstacle;
    const {style} = props;

    console.log(style);

    return(
        <div className={className} style={style}>

        </div>
    )
};

export default Obstacle;