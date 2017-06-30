import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var todoElement = this.props.completed ? <li><button>X</button><del>{' ' + this.props.taskText}</del></li> :<li><button>X</button>{' ' + this.props.taskText}</li>
        return (
            <div>
                {todoElement}
            </div>
        )
    }
}

export default Todo