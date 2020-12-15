import React, { Component } from "react";

class Clicker extends Component{
  constructor(props){
    super(props)
    this.state = {num: 1};
    this.genRandom = this.genRandom.bind(this);
  }
  genRandom(){
    // pick random number 1-10
    let rand = Math.floor(Math.random()*10) +1
    //update state with new rand 
    this.setState({num:rand})
    // bind random number 
  }

  //below is a terinary operator where if you click 7 the h1 You win pops up and remove the button and if not it keeps button up until you hit 7. 
   render(){
     return(
       <div>
       <h1> The Number is: {this.state.num} </h1>
       {this.state.num === 7 
       ? <h2>You Win!</h2> 
       :<button onClick = {this.genRandom}>Random Button</button>
      }
       </div>

     )
   }


}




export default Clicker; 
