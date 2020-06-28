import React, { Component } from 'react'

class ClassClick extends Component {

    clickData() {
        console.log("Class Click")
    }

    render() {
        return (
            <div>
                <button onClick = {this.clickData}>Class Click</button>
            </div>
            
        )
    }
}

export default ClassClick;