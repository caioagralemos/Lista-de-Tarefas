import React, { Component } from 'react'

class NewTodo extends Component {
    constructor(props){
        super(props)
        this.state={todo: ''}
    }
    handleChange = (evt) => {
        this.setState({todo: evt.target.value})
    }
    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.addTodo(this.state)
        this.setState({todo: ''})
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} style={{marginBottom:'15px'}}>
                <input 
                    name='todo'
                    id='todo'
                    onChange={this.handleChange}
                    value={this.state.todo}
                />
                <button>criar nova tarefa</button>
            </form>
        )
    }
}

export default NewTodo