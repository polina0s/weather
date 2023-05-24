import { api } from "../api/api";

export class WeatherForecastCont {
  constructor() {
    this.weatherForecastCont = document.querySelector(".weather_forecast_cont");
    this.api = api;
  }

  fillWeatherForecastElement(latitude, longitude, name) {
    this.api.getCurrentWeather(latitude, longitude).then((weather) => {
      console.log(weather);
      let data = {
        weathercode: weather.weathercode,
        temperature: weather.temperature,
        name: name,
      };
      this.appendWeatherForecast(new WeatherForecast(data).element);
    });

    this.api.getForecast(latitude, longitude);
  }

  clearWeatherForecastCont() {
    this.weatherForecastCont.innerHTML = "";
  }

  appendWeatherForecast(element) {
    this.weatherForecastCont.append(element);
  }
}
