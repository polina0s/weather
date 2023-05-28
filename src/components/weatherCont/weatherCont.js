import { api } from "../api/api";
import { CurrentWeather } from "../weatherForecast/currentWeather";

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
      this.appendWeather(new CurrentWeather(data).element);
    });

    // this.api.getForecast(latitude, longitude).then((forecast) => {
    //   console.log(forecast.temperature_2m);
    //   console.log(forecast.time);
    //   let curr = new Date();
    //   console.log(curr);
    // });
  }

  clearWeatherCont() {
    this.weatherCont.innerHTML = "";
  }

  appendWeather(element) {
    this.weatherCont.append(element);
  }
}
