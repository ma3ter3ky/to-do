import React from 'react';

class DeleteButton extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }
    render() {
        return (
            <button onClick={this.onClick} className="delete-task button">Delete</button>
        );
    }

    onClick() {
        console.log('deleted!');
    }
}

class Task extends React.Component {
    render() {
        return (
            <div className="task">
                <h2>{this.props.task.title}</h2>
                <DeleteButton />
            </div>
        );
    }

}

export default Task;