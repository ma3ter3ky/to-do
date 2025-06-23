import React from 'react';
const ClassNames = require('classnames');

class Task extends React.Component {
    render() {
        return (
            <div className={ClassNames("task", {"completed": this.props.completed})}>
                <p>{this.props.name}</p>
                <p>{this.props.completed}</p>
                <button className="delete-task button"
                        onClick={() => this.props.deleteTask(this.props.id)}>Delete</button>

                <button className="complete-task button"
                        onClick={() => this.props.completeTask(this.props.id)}>Complete</button>
            </div>
        );
    }
}

export default Task;