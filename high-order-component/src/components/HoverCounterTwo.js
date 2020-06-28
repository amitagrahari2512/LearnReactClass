import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounterTwo extends Component {

    render() {
        const {count, incrementCounter} = this.props
        return(
            <div>
                <h1 onMouseOver={incrementCounter}>Hover {count} times</h1>
            </div>
        )
    }
}

export default HoverCounterTwo