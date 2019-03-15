import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';
import './App.css';

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
    
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let personsShow = null;

    if (showPersons) {
      personsShow = (
        <div>
          {
            persons.map((person, i) => <Person key={person.id} nameChangeHandler = {(event) => this.nameChangeHandler(event, person.id)} deletePersonHandler = {() => this.deletePersonHandler(i)}  name={person.name} age={person.age}/>)
          }
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];
    if (persons.length <= 2) {
      classes.push('red');
    }
    if (persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hello Welcome To React App</h1>
          <p className={classes.join(' ')}>This is Really Working...</p>
          <button style={style} onClick = {this.togglePersonHandler}>Toggle Persons</button>
          {personsShow}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);