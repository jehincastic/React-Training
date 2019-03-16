import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';

class App extends Component {
  state = {
    persons: [
      {id: 'asas', name: 'Max', age: 28},
      {id: 'assdfsdfsdf', name: 'John', age: 25},
      {id: 'fsdfdsf', name: 'Manu', age: 23},
    ],
    showPersons: false
  }
  
  deletePersonHandler = (i) => {
    const persons = [...this.state.persons];
    persons.splice(i, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }
  
  render() {
    const {showPersons, persons} = this.state; 

    let personsShow = null;

    if (showPersons) {
      personsShow = <Persons deletePersonHandler = {this.deletePersonHandler} nameChangeHandler = {this.nameChangeHandler} persons = {persons} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit title = {this.props.title} persons={persons} showPersons = {showPersons} togglePersonHandler = {this.togglePersonHandler}/>
        {personsShow}
      </div>
    );
  }
}

export default App;