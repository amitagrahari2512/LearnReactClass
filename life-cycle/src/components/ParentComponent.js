import React, {Component} from 'react'
import RegularComponent from './RegularComponent'
import PureComp from './PureComp'

class ParentComponent extends Component {
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
                <PureComp name = {this.state.name}/>
                <RegularComponent name = {this.state.name}/>
            </div>
        )
    }
}

export default ParentComponent