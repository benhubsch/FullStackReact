import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                {this.props.todos.map((taskObj) => {
                    return <Todo taskText={taskObj.taskText} completed={taskObj.completed} />
                })}
            </ul>
        )
    }
}

export default TodoList