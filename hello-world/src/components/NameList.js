import React from 'react'
import Person from './Person'

const NameList = () =>{

    const persons = [
        {
            id:1,
            name:'Bruce',
            skills:'Batman',
            age:30
        },
        {
            id:2,
            name:'Clark',
            skills:'Superman',
            age:31
        },
        {
            id:3,
            name:'Diana',
            skills:'Wonder Woman',
            age:26
        }
    ]
    //If we don't have any key in our code then we can use index also.
    //const personList = persons.map((person.index) => <Person key = {index} person ={person} />);
    const personList = persons.map(person => <Person key = {person.id} person ={person} />);
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList;