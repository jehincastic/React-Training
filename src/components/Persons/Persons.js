import React from 'react';
import Person from './Person/Person';


const Persons = (props) =>
    props.persons.map((person, i) => {
        return <Person key={person.id} nameChangeHandler = {(event) => props.nameChangeHandler(event, person.id)} deletePersonHandler = {() => props.deletePersonHandler(i)}  name={person.name} age={person.age}/>
    });

export default Persons;