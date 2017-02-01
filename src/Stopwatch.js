import React, { Component } from 'react';

class Stopwatch extends Component{
constructor(props){
  super(props);
  this.state = {
    timer: 0
  };
}


  render(){
    const {timer} = this.state
    return(
      <div>
        <div className = "timer" > {timer} </div>
        <button onClick={(evt)=> this.StartTimer(evt)}>Start</button>
        <button onClick={(evt)=> this.StopTimer(evt)}>Stop</button>
        <button onClick={(evt)=> this.RestartTimer(evt)}>Restart Timer</button>
      </div>
    )
  }


  StartTimer(e){
    var _this= this
    this.increment = setInterval(function(){
      _this.setState({
        timer:  _this.state.timer+ 1
      })
    }, 1000)
  }
  StopTimer(e){
    console.log("stop");
    var _this = this
    this.increment = clearInterval(this.increment)
  }
  RestartTimer(e){
    console.log("Restart");
    const {timer} = this.state
    this.setState({
        timer: 0
    })
  }
  updateTimer(e){
    console.log("timerchange");
  }

}

export default Stopwatch
