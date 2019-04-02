import React from 'react';
import Input from "./Input";

const Controls = (props) => {
    return(
        <div className={'controls'}>
            <Input className={'input'} handelChange={props.handleChange}/>
        </div>
    )
}

export default Controls;