import { modal } from "../modal/modal";
import { weather, weatherImages } from "../weatherForecast/weathercodes";
import { WeatherForecast } from "../weatherForecast/weatherForecast";
class CityButton {
  constructor(data) {
    this.createCityButton({
      country: data.country,
      name: data.name,
      latitude: data.latitude,
      longitude: data.longitude,
      onClick: data.onClick
    });
    // this.modal = modal;
    // this.weatherUrl = import.meta.env.VITE_WEATHER_URL;
    // this.weatherForecast = document.querySelector(".weather_forecast_cont");
  }

  createCityButton({ country, name, latitude, longitude, onClick }) {
    this.element = document.createElement("button");
    this.element.classList.add("modal-button");

    this.element.innerHTML = `<div class="modal-button--country">${country}</div>
      <div class="modal-button--city">${name}</div>`;

    this.element.addEventListener("click", 
      onClick
      // this.clearWeatherForecastCont();
      // this.modal.removeActiveClass();
      // this.createWeatherForecastElement(latitude, longitude, name);
    );
  }

  // createWeatherForecastElement(latitude, longitude, name) {
  //   this.getCurrentWeather(latitude, longitude).then((weather) => {
  //     console.log(weather);
  //     let data = {
  //       weathercode: weather.weathercode,
  //       temperature: weather.temperature,
  //       name: name,
  //     };
  //     this.appendWeatherForecast(new WeatherForecast(data).element);
  //   });

  //   this.getForecast(latitude, longitude);
  // }

  // appendWeatherForecast(element) {
  //   this.weatherForecast.append(element);
  // }

  // clearWeatherForecastCont() {
  //   this.weatherForecast.innerHTML = "";
  // }

  // async getCurrentWeather(latitude, longitude) {
  //   const response = await fetch(
  //     `${this.weatherUrl}forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current_weather=true`
  //   );
  //   const json = await response.json();
  //   const currentWeather = json.current_weather;
  //   return currentWeather;
  // }

  // async getForecast(latitude, longitude) {
  //   const response = await fetch(
  //     `${this.weatherUrl}forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current_weather=true&forecast_days=7`
  //   );
  //   const json = await response.json();
  //   console.log(json);
  // }
}

export { CityButton };
