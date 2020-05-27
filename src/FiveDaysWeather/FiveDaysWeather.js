import React from 'react';
import './FiveDaysWeather.css';
import DayWeather from './DayWeather/DayWeather';

class FiveDaysWeather extends React.Component {

    constructor(props) {
        super(props);
		this.state = {
			daysWeather: [],
		};

    }
    
    componentDidMount() {
        fetch('https://my-json-server.typicode.com/evyros/react-weather-app/forecast')
        .then(data => data.json())
        .then(daysWeather => {
            this.setState({daysWeather})
        })
    }

	render() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		return (
			<div className="FiveDaysWeather">
                { this.state.daysWeather.map(dayWeather => {
                    return (
                        
                        <DayWeather 
                        key={dayWeather.day}
                        day={days[dayWeather.day]}
                        temperature={dayWeather.temperature}
                        icon={dayWeather.icon}
                        description={dayWeather.description}
                        />);
                } )}
			</div>
		);
	}

}



export default FiveDaysWeather;