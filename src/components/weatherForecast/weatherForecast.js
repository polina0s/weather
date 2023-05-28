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
    this.element.classList.add("weather_cur");

    this.element.innerHTML = `
    <div class="weather_cur--name">${name}</div>
    <div class="weather_cur--img_cont">
      <img class="weather_cur--img" src="/src/pictures/${weatherImages[weathercode]}.png" alt="weather" />
    </div>
    <div class="weather_cur--temp">${temperature}°C</div>
    <div class="weather_cur--descrip">${weather[weathercode]}</div>
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
