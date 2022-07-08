import React from 'react'


function Person({person}) {
  return (
    <div>
        <h2>
            iam {person.name}.iam {person.age} years old. iknow {person.skill}
        </h2>
    </div>
  )
}

export default Person