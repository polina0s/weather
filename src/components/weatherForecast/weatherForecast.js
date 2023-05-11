import { weather, weatherImages } from "./weathercodes";
export class WeatherForecast {
  constructor(data) {
    this.createWeatherForecast({
      weatherImage: data.weatherImage,
      temperature: data.temperature,
      weather: data.weather,
    });

    this.weathercodes = weathercodes;
  }

  createWeatherForecast({ weatherImage, temperature, weather }) {
    this.element = document.createElement("div");
    this.element.classList.add("weather_forecast");

    this.element.innerHTML = `<div class='weather_forecast--img_cont'> 
      <img class='weather_forecast--img' src="/src/pictures/${weatherImage}.png", alt="0"></img></div>
    <div class='weather_forecast--temp'> ${temperature} </div>
    <div class='weather_forecast--weather'> ${weather} </div>`;
  }
}
