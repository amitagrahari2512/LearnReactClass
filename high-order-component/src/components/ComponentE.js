import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentE extends Component {
    static contextType = UserContext
    render() {
        return(
            <div>
                Component E context {this.context}
                <ComponentF/>
            </div>
            
        )
    }
}

//We can use this thing to inside class with static keyword
//But it has two limitation inside it
//1 - It can only use in class componet
//2 - It can only consume one context

//ComponentE.contextType = UserContext
export default ComponentE