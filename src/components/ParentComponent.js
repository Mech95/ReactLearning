import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {   //rce snippet for class
    constructor(props) {                    //rconst constructor snippet
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
      this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName){
        alert('hello'+ this.state.parentName +'from' +childName) //instead we use template literals
       // alert('hello ${this.state.parentName}')
    }

  render() {
    return (
      <div><ChildComponent greetHandler={this.greetParent}/></div>
    )
  }
}

export default ParentComponent