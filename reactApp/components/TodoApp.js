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
    }

    componentDidMount() {
        this.setState({todos: dummyData})
    }

    render() {
        return (
            <div>
                <InputLine />
                <TodoList todos={this.state.todos}/>
            </div>
        )
    }
}

export default TodoApp