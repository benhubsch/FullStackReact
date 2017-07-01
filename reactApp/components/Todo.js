import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var todoElement = this.props.completed ?
                          <li><button onClick={this.props.xClick}>X</button><del onClick={this.props.toggleClick}>{' ' + this.props.taskText}</del></li>
                          :<li><button onClick={this.props.xClick}>X</button><span onClick={this.props.toggleClick}>{' ' + this.props.taskText}</span></li>
        return (
            <div>
                {todoElement}
            </div>
        )
    }
}

export default Todo