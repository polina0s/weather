import { weather, weatherImages } from "./weathercodes";
export class WeatherForecast {
  constructor(data) {
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
    <div class="weather_forecast--weather">${weather[weathercode]}</div>
    <div class="weather_forecast--weekly">
      <div class="weather_forecast--weekly_c">
        <div class="weather_forecast--weekly_c--day"> mon </div>
        <div class="weather_forecast--weekly_c--temp"> 12 </div>
      </div>
      <div class="weather_forecast--weekly_c">
        <div class="weather_forecast--weekly_c--day"> mon </div>
        <div class="weather_forecast--weekly_c--temp"> 12 </div>
      </div>
      <div class="weather_forecast--weekly_c">
        <div class="weather_forecast--weekly_c--day"> mon </div>
        <div class="weather_forecast--weekly_c--temp"> 12 </div>
      </div>
      <div class="weather_forecast--weekly_c">
        <div class="weather_forecast--weekly_c--day"> mon </div>
        <div class="weather_forecast--weekly_c--temp"> 12 </div>
      </div>
      <div class="weather_forecast--weekly_c">
        <div class="weather_forecast--weekly_c--day"> mon </div>
        <div class="weather_forecast--weekly_c--temp"> 12 </div>
      </div>
      <div class="weather_forecast--weekly_c">
        <div class="weather_forecast--weekly_c--day"> mon </div>
        <div class="weather_forecast--weekly_c--temp"> 12 </div>
      </div>
      <div class="weather_forecast--weekly_c">
        <div class="weather_forecast--weekly_c--day"> mon </div>
        <div class="weather_forecast--weekly_c--temp"> 12 </div>
      </div>
    </div>`;
  }
}
