import React from 'react';

class NewTaskButton extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    render() {
        return (
            <button onClick={this.onClick} className="new-task button">
                New Task</button>
        );
    }

    onClick() {
        console.log('clicked');
    }
}

export default NewTaskButton;