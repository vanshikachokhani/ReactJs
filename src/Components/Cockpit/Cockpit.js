import React from 'react';
import './Cockpit.css'
const cockpit = (props) => {
    let classes = [];
    if(props.persons.length <= 2){
      classes.push('red');
    }
    if(props.persons.length <= 1){
      classes.push('bold');
    }

    let btnClass=[];

    if(props.showPerson===true){
        btnClass.push('red');
    }
    
    return (
        <div className="Cockpit">
        <h1>
        Hi, I'm a react app
      </h1> 
      <p className={classes.join(' ')}>This is really working!</p>
      <button 
      className={btnClass.join(' ')}
      onClick={props.clicked}>Toggle Persons</button>
      </div>
    );
};
export default cockpit;