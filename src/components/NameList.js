import React from 'react'


// function NameList() {
//     const persons =[{
//         id:1,
//         name: 'bruce',
//         age:30,
//         skill:'react'
//     },
//     {
//         id:2,
//         name: 'clark',
//         age:30,
//         skill:'react'
//     },
//     {
//         id:3,
//         name: 'diana',
//         age:33,
//         skill:'rangular'
//     }
//     ]



    
//     const personList= persons.map(person => (<Person key={person.id} person={person} />
//             ))
//       return (<div>
       
//         {personList}
       
       
//         </div>)
//     }
    
//     export default NameList

function NameList() {
         const names =['bruce','clark','diana','bruce']
   
         const nameList= names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
         return
         <div>
            {nameList}
         </div>

}
export default NameList

