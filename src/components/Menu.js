import React from 'react';
import TaskList from './TaskList';
import NewTaskButton from './NewTaskButton';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: new Map([
                ['1', {name: 'Task 1', completed: false}],
                ['2', {name: 'Task 2', completed: false}],
                ['3', {name: 'Task 3', completed: false}]
            ]),
            newTaskId: 4,
        }
        this.addNewTask = this.addNewTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.toggleCompleteTask = this.toggleCompleteTask.bind(this);
    }
    render() {
        return (
            <div className="menu">
                <NewTaskButton addNewTask={this.addNewTask}/>
                <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} completeTask={this.toggleCompleteTask}/>
            </div>
        );
    }

    deleteTask(id){
        this.setState(prevState => {
            const updatedTasks = new Map(prevState.tasks);
            updatedTasks.delete(id);
            return {tasks: updatedTasks};
        });
    }

    toggleCompleteTask(id){
        this.setState(prevState => {
            const updatedTasks = new Map(prevState.tasks);
            const task = updatedTasks.get(id);
            updatedTasks.set(id, {...task, completed: !task.completed});
            return {tasks: updatedTasks};
        });
    }
c
    addNewTask(taskName){
        const newTaskIdStr = this.state.newTaskId.toString();
        this.setState(prevState => {
            const updatedTasks = new Map(prevState.tasks);
            updatedTasks.set(newTaskIdStr, {name: taskName, completed: false});
            return {tasks: updatedTasks, newTaskId: prevState.newTaskId + 1};
        });
    }
}

export default Menu;