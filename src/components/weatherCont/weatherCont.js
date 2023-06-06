import { api } from '../../api/api';
import { CurrentWeather } from '../currentWeather/currentWeather';
import { WeekWeather } from '../weekWeather/weekWeather';
export class WeatherCont {
  constructor() {
    this.weatherContCur = document.querySelector('.weather-forecast__cur');
    this.weatherContWeek = document.querySelector('.weather-forecast__week');
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
    // this.zalupa.startLoading();
    this.currentWeather = new CurrentWeather();
    this.currentWeather.startLoading();

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
        this.currentWeather.endLoading();
      });

    api.getForecast(latitude, longitude).then((forecast) => {
      const timeArr = forecast.time;
      const dates = this.convertTimeToDates(timeArr);

      this.weekWeather = new WeekWeather(dates, forecast.temperature_2m);

      this.appendWeekWeather(
        this.weekWeather.element,
        this.weekWeather.endTransition()
      );
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
