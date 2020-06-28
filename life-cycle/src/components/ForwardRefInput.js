import React from 'react'

// When we want reference , Then we need to use React.forwardRef(Component)
//And ref should be second parameter of function
const ForwardRefInput = React.forwardRef ((props, ref) => {
    return (
        <input type = 'text' ref = {ref}/>
    )
})

export default ForwardRefInput