import { render } from '@testing-library/react';
import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person'



class App extends Component{
  state = {
    persons:[
      {name:"Vanshika", age:20},
      {name:"Aditi",age:21},
      {name:"Shruti",age:26}
    ],
    otherState: 'some other value'
  }

  swicthNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: "Aditi", age: 21 },
        { name: "Shruti", age: 26 },
      ],
      showPerson:false,
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id==id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex]=person;

    this.setState({
      persons:persons
    });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  render(){
    const style={
        backgroundColor: 'green',
        color:'white',
        font:'inherit',
        border:'1px solid blue',
        padding: '8px',
        cursor:'pointer',
    };

   
    let persons=null;

    if(this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor='red';
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1>
          Hi, I'm a react app
        </h1> 
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
        style={style} 
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons} 
      </div>
    );
  }
    
}

export default App;

