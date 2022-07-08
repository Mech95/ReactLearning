import React from 'react'

//const Greet=(props) =>{

    // const Greet = ({name,hero}) =>{     //DISTRUCTION INSTEAD OF PROPS //way1
   // console.log(props)
   
   //<h1> Hello {props.name} as {props.hero}</h1>  line 14 replced

   
   const Greet = props =>{   //way2 defining props and giving values
   const{name,hero} = props
    return (
    <div>

    <h1> Hello {name} as {hero}</h1>
    
    </div>)
}

export default Greet 