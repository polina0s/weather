import { weather, weatherImages } from "../weathercodes/weathercodes";

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
    this.element.classList.add("weather_cur");

    this.element.innerHTML = `
    <div class="weather_cur--name">${name}</div>
    <div class="weather_cur--img_cont">
      <img class="weather_cur--img" src="/src/pictures/${weatherImages[weathercode]}.png" alt="weather" />
    </div>
    <div class="weather_cur--temp">${temperature}°C</div>
    <div class="weather_cur--descrip">${weather[weathercode]}</div>`;
  }

  endTransition() {
    setTimeout(() => {
      this.element.classList.add("weather_cur--end");
    }, 10);
  }
}
