import { api } from "../api/api";
import { CurrentWeather } from "../currentWeather/currentWeather";
import { WeekWeather } from "../weekWeather/weekWeather";

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

    this.api.getForecast(latitude, longitude).then((forecast) => {
      let temp = forecast.temperature_2m;
      let timeArr = forecast.time;
      let dates = [];

      for (let i = 0; i < timeArr.length; i++) {
        let date = timeArr[i].substring(5, 10).replaceAll("-", ".");
        dates.push(date);
      }
      // time = dates,
      // temperature = temp,

      this.weekWeather = new WeekWeather(dates, temp);

      console.log(dates, temp);
      console.log(dates[167]);

      this.appendWeekeather(this.weekWeather.element);

      // let timeArr = forecast.time;
      // let dates = [];

      // for (let i = 0; i < timeArr.length; i++) {
      //   let date = timeArr[i].substring(5, 10).replaceAll("-", ".");
      //   dates.push(date);
      // }

      // console.log(dates);
    });
  }

  clearWeatherCont() {
    this.weatherCont.innerHTML = "";
  }

  appendCurrentWeather(element) {
    this.weatherCont.append(element);
    this.currentWeather.endTransition();
  }

  appendWeekeather(element) {
    this.weatherCont.append(element);
  }
}
