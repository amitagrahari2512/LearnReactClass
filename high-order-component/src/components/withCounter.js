import React from 'react'
//WrappedComponent = OriginalComponent
//WithCounter = NewComponent
const withCounter = (WrapperCounter, incrementNumber) => {
    class WithCounter extends React.Component {
        
        constructor(props) {
            super(props)
            this.state = {
                count : 0
            }
        }

        incrementCounter = () => {
            this.setState((prevState) => {
                return {count : prevState.count + incrementNumber}
            })
        }

        render() {
            return <WrapperCounter 
                        count = {this.state.count} 
                        incrementCounter={this.incrementCounter}
                        {...this.props}/>
        }
    }
    return WithCounter
}

export default withCounter