import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';
//import  './Person/Person.css';

class App extends Component {
state ={
  persons:[
    {name: 'Minilik', age:28},
    {name: 'Befkadu', age:280},
    {name: 'Alemu', age:60},
    
   
  ],
  otherStates: 'Some other value',
  showPerson:false
}
switchNameHandler = (newName) =>{
  //console.log(" was clicked !");
  //this.state.persons[0].name="Megeresa";
  this.setState({persons:[
    {name: newName, age:28},
    {name: 'Befkadu', age:280},
    {name: 'Alemu', age:60},
  
   
  ]})
}
nameChangeHandler =( event)=>{
  this.setState({persons:[
    {name: 'Max', age:28},
    {name: event.target.value, age:280},
    {name: 'Alemu', age:60},
  
   
  ]})
}
togglePersonHandler = () =>{
   const doesShow = this.state.showPerson;
   this.setState({showPerson:!doesShow});
}
  render() {
    const buttonStyle ={
      backgroundColor :'white',
      font: 'inherit',
      border: '1x solid blue',
      padding : '8px',
      coursor:'pointer'
    };
    let persons =null;
    if(this.state.showPerson){
      persons =(
<div>

<Person 
name={this.state.persons[0].name} 
age={this.state.persons[0].age}>
</Person>
<Person 
name={this.state.persons[1].name} 
age={this.state.persons[1].age}
click={this.switchNameHandler.bind(this,'Maxxx')} 
changed={this.nameChangeHandler}> 
My Hobbies is codeing
</Person>
<Person 
name={this.state.persons[2].name}
 age={this.state.persons[2].age} />
    
</div>
      );
    }
    return (
    <div className="App">
     <h1> HI , I am React</h1>
     <p> I am Try to get hard in react</p>
     <h1> This is an other apdate </h1>
     <button 
     style={buttonStyle}
     onClick={this.togglePersonHandler}>Switch Name</button>
      {persons}
    
    </div>
  );
  //return React.createElement('div',{className:'App'},'h1','Befkadu!!!');
}
}

export default App;
