import { weather, weatherImages } from "./weathercodes";
import { api } from "../api/api";
export class WeatherForecast {
  constructor(data) {
    this.createWeatherForecast({
      weathercode: data.weathercode,
      temperature: data.temperature,
      name: data.name,
    });

    this.api = api;
    this.weatherForecast = document.querySelector(".weather_forecast_cont");
  }

  createWeatherForecastElement({ weathercode, temperature, name }) {
    this.element = document.createElement("div");
    this.element.classList.add("weather_forecast");

    this.element.innerHTML = `
    <div class="weather_forecast--name">${name}</div>
    <div class="weather_forecast--img_cont">
      <img class="weather_forecast--img" src="/src/pictures/${weatherImages[weathercode]}.png" alt="weather" />
    </div>
    <div class="weather_forecast--temp">${temperature}°C</div>
    <div class="weather_forecast--weather">${weather[weathercode]}</div>`;
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

  appendWeatherForecast(element) {
    this.weatherForecast.append(element);
  }

  clearWeatherForecastCont() {
    this.weatherForecast.innerHTML = "";
  }
}
