import React, { Component } from 'react'
import LifeCycleB from './LIfeCycleB'

class LifeCycleA extends Component {
    
constructor(props) {
  super(props)

  this.state = {
     name: 'nikihl'
  }
  console.log('LifeCycleA constructor')
}


static getDerivedStateFromProps(props,state){
    console.log('LifeCycleA getDerivedStateFromProps')
    return null 
}


componentDidMount(){
    console.log('LifeCycleA  componentDidMount')
}

shouldComponentUpdate(){
  console.log('LifeCycleA shouldComponentUpdate')
  return true
}

getSnapshotBeforeUpdate(prevProps,prevState){
  console.log('LifeCycleA getSnapshotBeforeUpdate')
  return null
}
componentDidUpdate(){
  console.log('LifeCycleA componentDidUpdate')
}

changeState =() =>{
  this.setState({
    name: 'code master'
  })
}

  render() {
    console.log('LifeCycleA render')
    return (
      <div>
      <div>LifeCycleA</div> 
      <button onClick={this.changeState}>cHange state</button>
      <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA