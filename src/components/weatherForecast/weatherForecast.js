import { weather, weatherImages } from "./weathercodes";
export class WeatherForecast {
  constructor(data) {
    console.log(data);
    this.createWeatherForecastElement({
      weathercode: data.weathercode,
      temperature: data.temperature,
      name: data.name,
    });
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
}
