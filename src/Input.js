import React from 'react';

const Input = (props) => {
    return <input className={props.className} onChange={props.handleChange} type={"text"}/>
};

export default Input;