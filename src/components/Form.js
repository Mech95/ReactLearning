import React, { Component } from 'react'

 class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
         topic: ''
      }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
      alert(`${this.state.username}`)
      event.preventDefault()   //PAGE DOESNT refresh
    }

  render() {
    const{username, comments, topic} =this.state    //clean up to remove this.state in line 46,53,59
    return (
        <form onSubmit={this.handleSubmit}>
             <div>
                 <label>Username</label>
                 <input 
                 type='text' 
                 value={username}                     //this.state removed
                 onChange={this.handleUsernameChange} 
                 />
             </div>
             <div>
                <label>Comments</label>
                <textarea 
                value={comments}                      //this.state removed
                onChange={this.handleCommentsChange}
                />
             </div>
             <div>
                <label>Topic</label>                     
                <select value={topic} onChange={this.handleTopicChange}>   
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>

             </div>
             <button type="submit">submit</button>
        </form>
     
    )
  }
}

export default Form