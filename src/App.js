import './App.css'
import WeatherComponent from './Components/WeatherComponent'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'

const client = new ApolloClient({
  uri: "https://graphql-weather-api.herokuapp.com",
  cache: new InMemoryCache()
})
function App() {
  return (
  <div className="app">
      <ApolloProvider client={client}>
        <div className="heading">
          <h1>Weather App __</h1>
          <h3>React Frontend with ApolloClient & GraphQL</h3>
        </div>
        <WeatherComponent/>
      </ApolloProvider>
    </div>
  )
}

export default App