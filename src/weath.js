import React, { Component } from 'react';
import Temperature from './temp';
import WeatherDescription from './WeatherDescription';
import { c2F } from './temp';
import Atmosphere from './atmos';


export class Weather extends Component {

    componentDidMount() {
        // set state of app isLoading to False
    }

    render() {
        // Take the weather data apart to more easily populate the component
        const { main, description, icon } = this.props.weatherData.weather[0]
        const { temp, pressure, humidity, temp_min, temp_max } = this.props.weatherData.main;
        return (
            <div className="weather-content">
                <WeatherDescription title={main} description={description} />
                <div>Icon: {icon}</div>
                <div>Temp: {temp}</div>
                <Atmosphere pressure={pressure} humidity={humidity} />
                <legend className="legend">Low:</legend><Temperature temp={ c2F(temp_min)} />
                <legend className="legend">High:</legend><Temperature temp={c2F(temp_max)} /> 
            </div>
        )
    }
}

export default Weather;