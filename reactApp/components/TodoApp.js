import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';

var dummyData = [{ taskText: "Wash the dishes", completed: false }, { taskText: "Call your mom", completed: true }, { taskText: "Clean the keyboard", completed: false }, { taskText: "Go get gas", completed: false }, { taskText: "Go to the bank", completed: true }]

class TodoApp extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this)
    }

    componentDidMount() {
        this.setState({todos: dummyData})
    }

    addTodo(task) {
        dummyData.push({taskText: task, completed: false})
        this.setState({todos: dummyData})
    }

    render() {
        return (
            <div>
                <InputLine submit={this.addTodo}/>
                <TodoList todos={this.state.todos}/>
            </div>
        )
    }
}

export default TodoApp