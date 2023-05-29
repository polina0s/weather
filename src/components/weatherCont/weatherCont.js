import { api } from "../api/api";
import { CurrentWeather } from "../currentWeather/currentWeather";

export class WeatherCont {
  constructor() {
    this.weatherCont = document.querySelector(".weather_cont");
    this.api = api;
  }

  fillCurrentWeatherElement({ latitude, longitude, name }) {
    this.api.getCurrentWeather(latitude, longitude).then((weather) => {
      let data = {
        weathercode: weather.weathercode,
        temperature: weather.temperature,
        name: name,
      };

      this.currentWeather = new CurrentWeather(data);

      this.appendCurrentWeather(this.currentWeather.element);
    });

    // this.api.getForecast(latitude, longitude).then((forecast) => {
    //   let temp = forecast.temperature_2m;
    //   let timeArr = forecast.time;
    //   let date = [];

    //   for (let i = 0; i < timeArr.length; i++) {
    //     let y = timeArr[i].substring(5, 10).replaceAll("-", ".");
    //     date.push(y);
    //   }

    //   console.log(date);
    // });
  }

  clearWeatherCont() {
    this.weatherCont.innerHTML = "";
  }

  appendCurrentWeather(element) {
    this.weatherCont.append(element);
    this.currentWeather.endTransition();
  }
}
