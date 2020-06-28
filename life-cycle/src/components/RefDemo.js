import React, {Component} from 'react'

class RefDemo extends Component {

    constructor(props) {
        super(props)
        //this.inputRef = React.createRef()

        //CallBack Reference
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        if(this.cbRef){
            this.cbRef.focus()
        }
        //console.log(this.inputRef)
        //this.inputRef.current.focus()
    }

    clickButton = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
                <input type='text' ref={this.setCbRef} />
                <button onClick={this.clickButton}>Change State</button>
            </div>
        )
    }

}

export default RefDemo