import React, { Component } from 'react'

class Dino extends Component {
    constructor(props) {
        super(props)

        this.state = {
            body: this.props.body,
            editingBody: ''
        }
    }

    changeEditingBody = (evt) => {
        this.setState({
            editingBody: evt.target.value
        })
    }

    editBody = () => {
        this.setState({
            body: this.state.editingBody
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>by {this.props.author}</p>
                <p>{this.state.body}</p>
                <input value={this.state.editingBody} onChange={this.changeEditingBody}/>
                <button onClick={this.editBody}>Edit body!</button>
                <h2>Comments:</h2>
                <p>{this.props.comments[0]}</p>
            </div>
        )
    }
}

export default Dino