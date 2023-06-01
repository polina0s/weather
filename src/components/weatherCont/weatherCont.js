import { api } from '../../api/api';
import { CurrentWeather } from '../currentWeather/currentWeather';
import { WeekWeather } from '../weekWeather/weekWeather';

// БЭМ
/**
 * БЛОК__елемент--модификатор
 *
 * БЛОК(weather-container)__element(current-forecast)--модификатор(hidden)
 * weather-container__current-forecast weather-container__current-forecast--hidden
 */
export class WeatherCont {
  constructor() {
    this.weatherContCur = document.querySelector('.weather-cont__cur'); //weather-cont__cur
    this.weatherContWeek = document.querySelector('.weather-cont__week'); //weather-cont__week
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
    api.getCurrentWeather(latitude, longitude).then((weather) => {
      // const
      let data = {
        weathercode: weather.weathercode,
        temperature: weather.temperature,
        name: name,
      };

      this.currentWeather = new CurrentWeather(data);

      this.appendCurrentWeather(
        this.currentWeather.element,
        this.currentWeather.endTransition()
      );
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
  }

  appendWeekWeather(element, callback) {
    this.weatherContWeek.appendChild(element);
  }
}
