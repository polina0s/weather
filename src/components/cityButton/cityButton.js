import { modal } from "../modal/modal";
import { weathercodes } from "../weatherForecast/weathercodes";
import { WeatherForecast } from "../weatherForecast/weatherForecast";
class CityButton {
  constructor(data) {
    this.createCityButton({
      country: data.country,
      name: data.name,
      latitude: data.latitude,
      longitude: data.longitude,
    });
    this.modal = modal;
    this.weatherUrl = import.meta.env.VITE_WEATHER_URL;
    this.weatherForecast = document.querySelector(".weather_forecast_cont");
  }

  createCityButton({ country, name, latitude, longitude }) {
    this.element = document.createElement("button");
    this.element.classList.add("modal-button");

    this.element.innerHTML = `<div class="modal-button--country">${country}</div>
      <div class="modal-button--city">${name}</div>`;

    this.element.addEventListener("click", () => {
      console.log(this.getWeather(latitude, longitude));
      this.modal.removeActiveClass();
    });
  }

  appendWeatherForecast(element) {
    this.weatherForecast.append(element);
  }

  async getWeather(latitude, longitude) {
    const response = await fetch(
      `${this.weatherUrl}forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current_weather=true`
    );
    // console.log(response);
    const json = await response.json();
    const currentWeather = json.current_weather;
    return currentWeather;
  }
}

export { CityButton };
