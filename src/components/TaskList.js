import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
    renderTasks() {
        return [...this.props.tasks.entries()].map(([id, task]) => (
            <Task
                key={id}
                id={id}
                name={task.name}
                completed={task.completed}
                deleteTask={this.props.deleteTask}
                completeTask={this.props.completeTask}
            />
        ));
    }

    render() {
        return <div className="taskList">{this.renderTasks()}</div>;
    }

}

export default TaskList;