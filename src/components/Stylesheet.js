import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let className=props.primary ? 'primary':'' //conditonally applying
  return (
    <div>
        <h1 className={'${className} font-xl'}>Stylesheet</h1>
    </div>
  )
}

export default Stylesheet