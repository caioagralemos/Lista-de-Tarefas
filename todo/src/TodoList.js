import React, { Component } from 'react'
import Todo from './Todo'
import NewTodo from './NewTodo'
import './TodoList.css'
import {v4 as uuidv4} from 'uuid'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {todos: []}
    }
    addTodo = (addedTodo) => {
        let newtodo = { ...addedTodo, id: uuidv4() } // adicionando id nova ao objeto
        this.setState(state => ({
            todos: [...state.todos, newtodo] // criando novo array com todos os itens do array antigo + todo
        }))
    }
    updateTodo = (id, update) => {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id){
                return {...todo, todo: update}
            }
            return todo
        })
        this.setState({todos: updatedTodos})
    }
    deleteTodo = (id) => {
        this.setState(state => ({
            todos: state.todos.filter(filteredTodo => filteredTodo.id !== id)
        }))
    }
    render(){
        let todos = []
        for (let index = 0; index < this.state.todos.length; index++) {
            todos.push(
                <Todo
                todo={this.state.todos[index].todo}
                id={this.state.todos[index].id}
                deleteTodo={this.deleteTodo}
                updateTodo={this.updateTodo}
            />
            )
        }
        return (
            <div className='TodoList'>
                <h1>Lista de Tarefas<span>Uma lista de tarefas simples com React</span></h1>
                <div>
                    {todos}
                </div>
                <hr />
                <NewTodo addTodo={this.addTodo} />
            </div>
        )
    }
}

export default TodoList