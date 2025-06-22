import React from 'react';

class NewTaskButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: "",
        };
    }
    render() {
        return (
            <div className="newTask">
                <input className="newTaskName" type="text" placeholder="Type a new task"
                value={this.state.taskName}
                onChange={(event) => this.setState({taskName: event.target.value})}
                onKeyPress={(event) => event.key === 'Enter' ? this.validateTask() : null}/>
                <button className="newTaskButton button" onClick={() => this.validateTask()}> Add Task </button>
            </div>
        );
    }

    validateTask() {
        if (this.state.taskName !== "") {
            this.props.addNewTask(this.state.taskName);
            this.setState({taskName: ""});
        }
    }
}

export default NewTaskButton;