 //importing react component  
import {Component} from 'react';
import ReactDOM from 'react-dom';

//creating react component

class User extends Component {
  render(){
    return(
  <button class='user' onClick={() =>{ this.props("x")} }>this.props.value</button> 
    );
  }
}

//creating a calculator component
export default class Calculator extends Component {
  constructor(props){
    super(props)
     
    this.state = {
     userInArr: []
    }
    this.setState(this.state.userInArr = User);
  }
  
  eventControl(x){
    const userInArr = this.state.userInArr
     userInArr.map((intKey1,intKey2) =>{
     if(Number.isInteger(intKey1,intKey2) === true){
       return intKey1 + intKey2;
     } else {
       return "not a number"
     }
    } );
  }
  
  userState(x){
    return(
    
    <User 
    value= 
    {this.state.userInArr[x]} //hoping from here this will affect all an put every i in an array.
    onClick={() =>
      this.eventControl(x) }
    /> 
    );
  }
  
//creating render to render the component of dom to the component user

   render(){
     const heading = 'react calculator';
     return(
     

     <div class='calculator'>
    <div class='calculator-keys'>

       {this.userState(1)}

       {this.userState(2)}

       {this.userState(3)} 
     </div>
     <div class='calculator-keys'>

       {this.userState(4)}

       {this.userState(5)} 

       {this.userState(6)} 
     </div>
      <div class='calculator-keys'>

       {this.userState(7)}

       {this.userState(8)}

       {this.userState(9)} 
     </div>
      <div class='calculator-keys'>

       {this.userState(null)}

       {this.userState('+')} 

       {this.userState(0)}
        
     </div>
     </div>
     );
   }
}

//creating a calc component to call calculator 
export default class Calc extends Component {
  render(){
    return(
    <div class='calc'>
    <div class='calc-calculator'>
      <Calculator />
    </div>
    <div class='cal-info'></div>
  <ul>
    <li>the calculator is durable</li>
    <li>the calculator serve only one purpose which is addition</li>
    <li>you can use it as a soft soft work </li>
    </ul>
    </div>
    
    );
  }
}


ReactDOM.render(<calculator />,  document.getElementById('calculate'));
