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

ReactDOM.render(<TodoList />, document.getElementById('root'));