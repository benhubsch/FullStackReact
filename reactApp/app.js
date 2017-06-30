import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = ['Wash the dishes', 'Take out the trash', 'Clean the keyboard', 'Call your mom']

class Todo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <li><button>X</button>{' ' + this.props.task}</li>
            </div>
        )
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                {dummyData.map(function(task) {
                    return <Todo task={task}/>
                })}
            </ul>
        )
    }
}

class InputLine extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Add a task" name="addTask"></input>
                <button type="submit">Add Todo</button>
            </div>
        )
    }
}

class TodoApp extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <InputLine />
                <TodoList />
            </div>
        )
    }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));