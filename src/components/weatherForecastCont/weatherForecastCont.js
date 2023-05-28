import { api } from "../api/api";
import { CurrentWeather } from "../weatherForecast/currentWeather";

export class WeatherForecastCont {
  constructor() {
    this.weatherForecastCont = document.querySelector(".weather_cont");
    this.api = api;
  }

  fillWeatherForecastElement({ latitude, longitude, name }) {
    this.api.getCurrentWeather(latitude, longitude).then((weather) => {
      let data = {
        weathercode: weather.weathercode,
        temperature: weather.temperature,
        name: name,
      };
      this.appendWeatherForecast(new CurrentWeather(data).element);
    });

    // this.api.getForecast(latitude, longitude).then((forecast) => {
    //   console.log(forecast.temperature_2m);
    //   console.log(forecast.time);
    //   let curr = new Date();
    //   console.log(curr);
    // });
  }

  clearWeatherForecastCont() {
    this.weatherForecastCont.innerHTML = "";
  }

  appendWeatherForecast(element) {
    this.weatherForecastCont.append(element);
  }
}
