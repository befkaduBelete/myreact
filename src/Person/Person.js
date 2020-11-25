import React from 'react';
import Radium from 'radium';

import './Person.css';

const style ={
    '@media (min-width:500px)':{
        width:'400px'
    }
};

const person = ( props ) => {
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm mmm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default Radium(person);