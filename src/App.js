import React from 'react';
import './App.css';
import FiveDaysWeather from './FiveDaysWeather/FiveDaysWeather';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <h1>Five Day Weather forecast</h1>
                <FiveDaysWeather />
            </div>
        );
    }

}

export default App;
