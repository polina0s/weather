import { api } from '../../api/api';
import { CurrentWeather } from '../currentWeather/currentWeather';
import { WeekWeather } from '../weekWeather/weekWeather';
import { Loader } from '../loader/loader';

export class WeatherCont {
  constructor() {
    this.weatherContCur = document.querySelector('.weather-forecast__cur');
    this.weatherContWeek = document.querySelector('.weather-forecast__week');
    this.loader = new Loader();
  }

  convertTimeToDates(time) {
    let dates = [];

    for (let i = 0; i < time.length; i++) {
      let date = time[i].substring(5, 10).replaceAll('-', '.');
      dates.push(date);
    }

    return dates;
  }

  fillCurrentWeatherElement({ latitude, longitude, name }) {
    this.currentWeather = new CurrentWeather();
    this.loader.startLoading(this.weatherContCur);

    api
      .getCurrentWeather(latitude, longitude)
      .then((weather) => {
        const data = {
          weathercode: weather.weathercode,
          temperature: weather.temperature,
          name: name,
        };

        this.currentWeather.createCurrentWeatherElement(data);

        this.appendCurrentWeather(
          this.currentWeather.element,
          this.currentWeather.endTransition()
        );
      })
      .finally(() => {
        this.loader.endLoading();
      });
  }

  fillWeekWeatherElement({ latitude, longitude }) {
    this.weekWeather = new WeekWeather();
    this.loader.startLoading(this.weatherContWeek);

    api
      .getForecast(latitude, longitude)
      .then((forecast) => {
        const timeArr = forecast.time;
        const dates = this.convertTimeToDates(timeArr);

        this.weekWeather.createWeekWeatherElement(
          dates,
          forecast.temperature_2m
        );

        this.appendWeekWeather(
          this.weekWeather.element,
          this.weekWeather.endTransition()
        );
      })
      .finally(() => {
        this.loader.endLoading();
      });
  }

  clearWeatherContCur() {
    this.weatherContCur.innerHTML = '';
  }

  clearWeatherContWeek() {
    this.weatherContWeek.innerHTML = '';
  }

  appendCurrentWeather(element, callback) {
    this.weatherContCur.append(element);
    callback?.();
  }

  appendWeekWeather(element, callback) {
    this.weatherContWeek.appendChild(element);
    callback?.();
  }
}
