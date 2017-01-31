import React, { Component } from 'react';

class Stopwatch extends Component{
constructor(props){
  super(props);
  this.state = {
    timer: 0
  }
}


  render(){
    return(
      <div>
        <h1> hello world</h1>
        <button onClick={(evt)=> this.StartTimer(evt)}>Start</button>
        <button onClick={(evt)=> this.StopTimer(evt)}>Stop</button>
        <button onClick={(evt)=> this.RestartTimer(evt)}>Restart Timer</button>
      </div>
    )
  }


  StartTimer(e){
    console.log("start");
  }
  StopTimer(e){
    console.log("stop");
  }
  RestartTimer(e){
    console.log("Restart");
  }

}

export default Stopwatch
