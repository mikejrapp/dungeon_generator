import React from 'react';
import Input from "./Input";
import Button from './Button';

const Controls = (props) => {
    return(
        <div className={'controls'}>
            <Input className={'input'} handelChange={props.handleChange}/>
            <Button className={'button'} handleClick={props.handleGenerate} title={"Generate"}/>
            <Button className={'button'} handleClick={props.handleClear} title={"Clear"}/>
        </div>
    )
};

export default Controls;