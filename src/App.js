import React from 'react';
import Header from './components/Header';
import NewTaskButton from './components/NewTaskButton';
import Task from './components/Task';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <NewTaskButton />
                <Task task={{ title: 'Task 1' }} />
                <Task task={{ title: 'Task 2' }} />
            </div>
        );
    }
}

export default App;