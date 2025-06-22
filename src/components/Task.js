import React from 'react';

class Task extends React.Component {
    render() {
        return (
            <div className="task">
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