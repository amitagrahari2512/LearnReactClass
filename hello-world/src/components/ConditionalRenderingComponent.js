import React, { Component } from 'react'

class ConditionalRenderingComponent extends Component {

    constructor() {
        super()
        this.state = {
            isLoggedIn : false
        }

    }
    render() {
        
            //1 - If else
            // if(this.state.isLoggedIn)
            // {
            //     return (
            //         <div>
            //             Welcome Amit
            //         </div>
            //     )
            // }
            // else{
            //     return (
            //         <div>
            //             Welcome Guest
            //         </div>
            //     )
            // }

            //2 - Elementary
            // let message
            // if(this.state.isLoggedIn)
            // {
            //     message = <div>Welcome Amit</div>
            // }
            // else{
            //     message = <div>Welcome Guest</div>
            // }

            // return(
            //     <div>
            //         {message}
            //     </div>
            // )

            //3 - Ternary Operator
            //return this.state.isLoggedIn ? <div>Welcome Amit</div> : message = <div>Welcome Guest</div>
         
            //4 - Circuit Break
            return this.state.isLoggedIn && <div>Welcome Amit</div>
    }
}

export default ConditionalRenderingComponent;