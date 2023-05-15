import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    constructor(props){
        super(props)
        this.state={isDone: false, isEditing: false, task: this.props.todo}
    }
    handleDelete = () => {
        this.props.deleteTodo(this.props.id)
    }
    handleSubmit = (evt) => {
        evt.preventDefault()
        // levar novos dados para classe pai
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState(
            {isEditing: !this.state.isEditing}
        )
    }
    handleChange = (evt) => {
        this.setState({
            task: evt.target.value
        })
    }
    toggleForm = () => {
        this.setState(
            {isEditing: !this.state.isEditing}
        )
    }
    toggleDone = () => {
        this.setState(
            {isDone: !this.state.isDone}
        )
    }
    render(){
        if(this.state.isEditing === true){
            return (<div className='Todo'>
            <form style={{display:'inline'}} onSubmit={this.handleSubmit}>
                <input 
                onChange={this.handleChange}
                name='task'
                value={this.state.task}
                type='text'
                />
                <button>ok</button>
            </form>
            <button onClick={this.toggleForm}>parar de editar</button>
            </div>)
        } else if (this.state.isDone === false) {
        return(
            <div className='Todo'>
            {this.props.todo}
            <button onClick={this.toggleDone}>feito!</button>
            <button onClick={this.handleDelete}>excluir</button>
            <button onClick={this.toggleForm}>editar</button>
            </div>

        )
      } else {
        return(
            <div className='Todo done-task'>
            {this.props.todo}
            <button onClick={this.toggleDone}>voltar</button>
            </div>

        )
      }
    }
}

export default Todo