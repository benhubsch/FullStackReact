import React from 'react';

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

export default InputLine