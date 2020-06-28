import React, { Component } from 'react'
import ForwardRefInput from './ForwardRefInput'

class ForwardParentRefInput extends Component {
    constructor () {
        super()
        this.inputRef = React.createRef()
    }

    clickHandler = () =>{
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <ForwardRefInput ref = {this.inputRef}/>
                <button onClick = {this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ForwardParentRefInput