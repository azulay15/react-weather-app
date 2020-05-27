import React from 'react';
import './DayWeather.css';

class DayWeather extends React.Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }
    


    render() {
        return (
            <div className="DayWeather">
                <h3>{this.props.day}</h3>
                <p>{this.props.temperature}°</p>
                <img src={require(`../../icons/${this.props.icon}.png`)} width={'100px'} alt="weatherImage"/>
                <sub>{this.props.description}</sub>
            </div>
        );
    }

}

export default DayWeather;