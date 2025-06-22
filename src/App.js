import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Menu />
            </div>
        );
    }
}

export default App;