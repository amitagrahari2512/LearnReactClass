import React from 'react'

const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name}, you known as {props.heroName}</h1>
            {props.children}
        </div>
    )
}


// function Greet() {
//     return <h1>Hello Amit</h1>
// }

export default Greet;