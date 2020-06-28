import React, {Component} from 'react'
import MemoComponent from './MemoComponent'

class ParentComponentMemo extends Component {
    constructor() {
        super()
        this.state ={
            name : 'Amit'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name:'Amit'
            })
        },2000)
    }

    render () {
        console.log("######## Parent component #############")
        return (
            <div>
                Parent Component
                <MemoComponent name = {this.state.name}/>
            </div>
        )
    }
}

export default ParentComponentMemo