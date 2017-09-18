import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Input from './components/Input';
import Currentweather from './components/Currentweather';


var apiKey = "93f2eae38ef62287a49caf1bae48e24f";
var baseUrl = "http://api.openweathermap.org/data/2.5/weather?q=";


class App extends Component {
  constructor(){
    super();

    this.state = {
      city: "",
      temp: "",
      humidity: '',
      weather: '',
      description: '',
      images: []
    }

    this.getWeather = this.getWeather.bind(this);
    this.updateCity = this.updateCity.bind(this);
  }

  getWeather(city){
    console.log(city);
    let that = this;
    axios.get(baseUrl + city + '&APPID=' + apiKey).then( response => {
      // axios.get('/api/weather/').then( response => {
      console.log(response.data)
      that.setState({
        city: response.data.name + ':',
        temp: Math.round(response.data.main.temp * 9/5 - 459.67) + ' F',
        wind: response.data.wind.speed + 'speed',
        humidity:response.data.main.humidity +'%',
        weather: response.data.weather[0].main,
        description: response.data.weather[0].description,
      })
      
    })
  }

componentDidMount(){
  axios.get('http://localhost:3007/api/images').then(response => {
    console.log(response);
    this.setState({
      images: response.data[0]
    })
  })
  }


  updateCity(city){
    console.log(city)
    this.setState({
      city
    })
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
        <h1> Current Weather App </h1>
        <img className = "App-logo" src="https://openclipart.org/image/2400px/svg_to_png/208526/sunicon.png" alt="Sun"/>
        </div>
        <div className = "Components">
        <Input
         getWeather={this.getWeather} 
         updateCity = {this.updateCity}
         city = {this.state.city}
         image = {this.state.images}
         />
         <Currentweather 
         city = {this.state.city}
         temp = {this.state.temp}
         humidity = {this.state.humidity}
         weather ={this.state.weather}
         description = {this.state.description}
         />
         </div>
      </div>
    );
  }
}

export default App;
