import { weather, weatherImages } from "./weathercodes";
export class WeatherForecast {
  constructor(data) {
    this.createWeatherForecast({
      weathercode: data.weathercode,
      temperature: data.temperature,
    });
  }

  createWeatherForecast({ weathercode, temperature }) {
    this.element = document.createElement("div");
    this.element.classList.add("weather_forecast");

    this.element.innerHTML = `<div class='weather_forecast--img_cont'> 
      <img class='weather_forecast--img' src="/src/pictures/${weatherImages[weathercode]}.png", alt="0"></img></div>
    <div class='weather_forecast--temp'> ${temperature}°C </div>
    <div class='weather_forecast--weather'> ${weather[weathercode]} </div>`;
  }
}
