import React from 'react'
import { useQuery, gql } from '@apollo/client'
import './QueryData.css'
import TitleCase from '../lib/TitleCase'

const getCityByName = gql`
query GetCityByName($name: String!) {
    getCityByName(name: $name, config:{units: imperial}){
        name
        country
        weather{
            summary{
                title
                description
                icon
            }
            temperature{
                actual
                feelsLike
                min
                max
            }
            wind{
                speed
                deg
            }
            clouds{
                all
                visibility
                humidity
            }
            timestamp
        }
    }
}`

function QueryData(props) {
    const { loading, error, data } = useQuery(getCityByName, {
        variables: {
            name: props.cityName
        }
    })
    let string = props.cityName
    if ( loading ) return <div className="weatherMessage"><h3 className="message">Loading weather for {TitleCase(string)}...</h3></div>
    if ( error ) return <div className="weatherMessage"><h3 className="message error">Error :(</h3></div>
    if ( data.getCityByName !== null ){
        return (
            <div className="weatherResults">
                <div>
                    <p>City__</p>
                    <h2>{data.getCityByName.name}</h2>
                </div>
                <div>
                    <p>Country__</p>
                    <h2>{data.getCityByName.country}</h2>
                </div>
                <div>
                    <p>Temperature__</p>
                    <h2>{data.getCityByName.weather.temperature.actual}</h2>
                </div>
                <div>
                    <p>Current Weather__</p>
                    <div className="flex">
                    <img src={`http://openweathermap.org/img/w/${data.getCityByName.weather.summary.icon}.png`} 
                        alt={data.getCityByName.weather.summary.description}/>
                    <h2>{data.getCityByName.weather.summary.description}</h2>
                    </div>
                </div>
            </div>
        )
    } else { return <div className="weatherMessage"><h3 className="message">The city name is not valid</h3></div> }
}

export default QueryData
