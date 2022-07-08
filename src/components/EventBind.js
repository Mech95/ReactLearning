import React, { Component } from 'react'

export class EventBind extends Component {    //rconst for constructor
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hweloo'
      }

     // this.clickHandler= this.clickHandler.bind(this)

    }
    //clickHandler(){
    //    this.setState({                                     //<button on onClick={this.clickHandler.bind(this)}>click</button>  -->binding inside render()::line23
                                                            //<button onClick={() => this.clickHandler()}>click</button> --> arrow functions in render method
      //      message:'goodbye'                               //this.clickHandler= this.clickHandler.bind(this) -->binding in the class constructor-->bcs binding happn onces in constructor this is better compared to bining in render method.
      // })                                                   //clickHandler =()=>{this.setState({message:'Goodbye?'}) -->class property as arrow function
       //console.log(this)
//}
    clickHandler =()=>{
        this.setState({
            message:'Goodbye?'
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div> 
          <button onClick={() => this.clickHandler()}>click</button>  
    
      </div>
    )
  }
}

export default EventBind