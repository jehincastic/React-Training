import React from 'react';
import classes from './Person.css';

const Person = (props) => {
    return(
        <div className={classes.Person}>
            <p onClick = { props.deletePersonHandler }>Iam a {props.name} and Iam {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange = {props.nameChangeHandler} value = {props.name}/>
        </div>
    );
};

export default Person;