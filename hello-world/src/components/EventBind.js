import React, { Component } from 'react'

class EventBind extends Component {

    constructor() {
        super()
        this.state = {
            message : 'Hello'
        }

        //this.clickData = this.clickData.bind(this)
    }

    //This is working fine,but we can use arrow notation also
    // clickData() {
    //     this.setState({
    //         message : 'Bye'
    //     })
    // }

    clickData = () => {
        this.setState({
            message : 'Bye'
        })
    }

    render() {
        return (
            <div>
                {this.state.message}
                <br></br>
                {/* All of event working fine but first two is having issue when we call child Component
                then its create having problem. */}
                {/* <button onClick = {this.clickData.bind(this)}>Event Bind</button> */}
                {/* <button onClick = {()=>this.clickData()}>Event Bind</button> */}
                <button onClick = {this.clickData}>Event Bind</button>
            </div>
        )
    }
}

export default EventBind;