import React, {Component} from 'react'

class Form extends Component {

    constructor() {
        super()
        this.state = {
            userName : '',
            comments : '',
            topic:'react'
        }
    }

    handleChangeUserName = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    handleChangeComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleChangeTopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert (`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const {userName, comments, topic} = this.state
        return (
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <label>UserName</label>
                    <input type='text' value = {userName} onChange={this.handleChangeUserName} />
                </div>
                <div>
                    <label>Comments</label>
                    <input type='textarea' value = {comments} onChange={this.handleChangeComments} />
                </div>
                <div>
                    <label>Topic</label>
                    <select value = {topic} onChange={this.handleChangeTopic}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type='submit' >Submit</button>
            </form>
        )
    }
}

export default Form