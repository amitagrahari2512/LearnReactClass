import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div>
                <h5>This is Class Component</h5>
                <h1>Hello {this.props.name}, you known as {this.props.heroName} </h1>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome;