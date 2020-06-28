import React from 'react'

const FunctionClick = () => {

    const clickData=()=> {
        console.log("Function Click")
    }

    return (
        <div>
            <button onClick= {clickData}>Click Function</button>
        </div>
    )
}

export default FunctionClick;