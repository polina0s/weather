import { weather, weatherImages } from "../../config/weathercodes";

export class CurrentWeather {
  constructor(data) {
    this.createCurrentWeatherElement({
      weathercode: data.weathercode,
      temperature: data.temperature,
      name: data.name,
    });
  }

  createCurrentWeatherElement({ weathercode, temperature, name }) {
    this.element = document.createElement("div");
    this.element.classList.add("cur-weather");

    this.element.innerHTML = `
    <div class="cur-weather__name">${name}</div>
    <div class="cur-weather__img-cont">
      <img class="cur-weather__img" src="/src/pictures/${weatherImages[weathercode]}.png" alt="weather" />
    </div>
    <div class="cur-weather__temp">${temperature}°C</div>
    <div class="cur-weather__descrip">${weather[weathercode]}</div>`;
  }

  endTransition() {
    setTimeout(() => {
      this.element.classList.add("cur-weather--end");
    }, 10);
  }
}
