import { api } from "../api/api";
import { CurrentWeather } from "../currentWeather/currentWeather";

export class WeatherCont {
  constructor() {
    this.weatherCont = document.querySelector(".weather_cont");
    this.api = api;
  }

  fillWeatherElement({ latitude, longitude, name }) {
    this.api.getCurrentWeather(latitude, longitude).then((weather) => {
      let data = {
        weathercode: weather.weathercode,
        temperature: weather.temperature,
        name: name,
      };
      this.appendCurrentWeather(new CurrentWeather(data).element);
    });

    this.api.getForecast(latitude, longitude).then((forecast) => {
      console.log(forecast.temperature_2m);
      console.log(forecast.time);
      let curr = new Date();
      // let firstEl = curr.getHours() + 24;
      // let secEl = curr.getHours() + 48;
      console.log(`${curr.getDate()}.${curr.getMonth()}`);
    });
  }

  clearWeatherCont() {
    this.weatherCont.innerHTML = "";
  }

  appendCurrentWeather(element) {
    this.weatherCont.append(element);
  }
}
