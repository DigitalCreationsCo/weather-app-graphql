import React, { Component } from 'react'
import QueryData from './QueryData'
import './WeatherComponent.css'

class WeatherComponent extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: "",
            displayQueryData: false,
        }
    }
    render() {
        const displayWeatherData = () => {
            if( !this.state.displayQueryData ){
                this.setState({
                displayQueryData: !this.state.displayQueryData
                })
            }
        }

        const onFormSubmit = e => {
            e.preventDefault()
            displayWeatherData()
        }
        let weatherResult = null
        if ( this.state.displayQueryData ) {
            weatherResult = (
                <QueryData cityName={ this.state.searchTerm } />
            )
        }
        return (
            <div className="weatherComponent">
            <div className="weatherInput">
                <h2>Get the weather for any city worldwide</h2>
                <form className="userInput" onSubmit={onFormSubmit}>
                    <input class="inputField" type="text" placeholder="Enter a city..." 
                    onChange={( event ) => {
                    this.setState({ displayQueryData: false })
                    this.setState({ searchTerm: event.target.value })}} 
                    />
                    <input class="submit" type="submit" value="Submit" />
                </form>
            </div>
            <div className="weatherResult">
                {weatherResult}
            </div>
            </div>
        )
    }
}

export default WeatherComponent