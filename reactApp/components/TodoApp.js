import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import axios from 'axios';

var dummyData = [{ taskText: "Wash the dishes", completed: false }, { taskText: "Call your mom", completed: true }, { taskText: "Clean the keyboard", completed: false }, { taskText: "Go get gas", completed: false }, { taskText: "Go to the bank", completed: true }]

const dbUrl = "http://localhost:3000/db";

class TodoApp extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.toggleTodo = this.toggleTodo.bind(this)
    }

    componentDidMount() {
        this.setState({todos: dummyData})
    }

    addTodo(task) {
        // dummyData.push({taskText: task, completed: false})
        // this.setState({todos: dummyData})
        console.log(task);
        axios.post(dbUrl + '/add', {task})
            .then((response) => {
                console.log(response.data);
                this.setState({ todos: this.state.todos.concat(response.data)});
            })
            .catch((error) => {
                console.log('axios catch error', error);
            });
    }

    removeTodo(index) {
        dummyData.splice(index, 1)
        this.setState({todos: dummyData})
    }

    toggleTodo(index) {
        dummyData[index].completed = ! dummyData[index].completed
        this.setState({todos: dummyData})
    }

    render() {
        return (
            <div>
                <InputLine submit={this.addTodo} />
                <TodoList todos={this.state.todos} todoToggle={this.toggleTodo} todoXClick={this.removeTodo} />
            </div>
        )
    }
}

export default TodoApp