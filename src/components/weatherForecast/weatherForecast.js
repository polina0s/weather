import { weathercodes } from "./weathercodes";
export class WeatherForecast {
  constructor(data) {
    this.createWeatherForecast({
      weathercode: data.weathercode,
      temperature: data.temperature,
      weather: data.weather
    });

    this.weathercodes = weathercodes;
  }

  createWeatherForecast({ weathercode, temperature, weather }) {
    this.element = document.createElement("div");
    this.element.classList.add("weather_forecast");

    this.element.innerHTML = `div.weather_forecast--img_cont 
      img.weather_forecast--img(src="/src/pictures/${weathercode}.png", alt="0")
    div.weather_forecast--temp ${temperature}
    div.weather_forecast--weather ${weather}`;
  }
}