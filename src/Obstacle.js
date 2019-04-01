import React from 'react';

const Obstacle = (props) => {
    const {className} = props.obstacle;

    console.log(props.test);

    return(
        <div className={className}>

        </div>
    )
};

export default Obstacle;