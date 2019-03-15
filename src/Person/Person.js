import React from 'react';
import Radium from 'radium';
import './Person.css';

const Person = (props) => {
    const style = {
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    };
    return(
        <div className='Person' style = {style}>
            <p onClick = { props.deletePersonHandler }>Iam a {props.name} and Iam {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange = {props.nameChangeHandler} value = {props.name}/>
        </div>
    );
};

export default Radium(Person);