import { CityButton } from "../cityButton/cityButton";
import { weather, weatherImages } from "../weatherForecast/weathercodes";
import { WeatherForecast } from "../weatherForecast/weatherForecast";

class Modal {
  constructor() {
    this.modalWind = document.querySelector(".modal");
    this.weatherForecast = new WeatherForecast();
  }

  addActiveClass() {
    this.modalWind.classList.add("modal--active");
  }

  removeActiveClass() {
    this.modalWind.classList.remove("modal--active");
  }

  appendCityButton(element) {
    this.modalWind.append(element);
  }

  handleCityClick({ latitude, longitude, name }) {
    this.weatherForecast.clearWeatherForecastCont();
    this.modal.removeActiveClass();
    this.weatherForecast.fillWeatherForecastElement({
      latitude,
      longitude,
      name,
    });
  }

  showModal(data) {
    this.clearModal();
    if (data) {
      data?.forEach((data) => {
        const element = new CityButton({
          ...data,
          onClick: this.handleCityClick({
            latitude: data.latitude,
            longitude: data.longitude,
            name: data.name,
          }),
        });
        this.appendCityButton(element);
      });
      this.addActiveClass();
    }
  }

  clearModal() {
    this.modalWind.innerHTML = "";
  }
}

const modal = new Modal();

export { modal };
