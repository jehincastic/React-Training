import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = null;

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    
    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is Really Working...</p>
            <button className={btnClass} onClick = {props.togglePersonHandler}>Toggle Persons</button>
        </div>
    );
};

export default Cockpit;