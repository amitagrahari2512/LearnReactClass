import React from 'react'

const Person =({person}) => {
    return (
        <div>
            <h2>My name is {person.name}.My age is {person.age}.I have {person.skills} skills</h2>
        </div>
    )
}

export default Person;