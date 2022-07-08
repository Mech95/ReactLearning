import React, { Component } from'react'

class Welcome extends Component{
    render() {
        const{name,hero}=this.props
        //const{name,hero}=this.state                     //using distruction props and states
        return (
     //   <h1>Welcome {this.props.name} who is {this.props.hero}</h1>
     <h1>Welcome {name} who is {hero}</h1>
        )
    }
    
}

export default Welcome