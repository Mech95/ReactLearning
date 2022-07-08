import React from 'react'

function ChildComponent(props) {   //rfce --> functional component
  return (
    <button onClick={() => props.greetHandler('child')}>greetParent</button>
  )
}

export default ChildComponent