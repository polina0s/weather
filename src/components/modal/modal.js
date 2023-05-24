import { CityButton } from "../cityButton/cityButton";
import { WeatherForecast } from "../weatherForecast/weatherForecast";
import { WeatherForecastCont } from "../weatherForecastCont/weatherForecastCont";

class Modal {
  constructor() {
    this.modalWind = document.querySelector(".modal");
    this.weatherForecastCont = new WeatherForecastCont();
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
    this.weatherForecastCont.clearWeatherForecastCont();
    this.removeActiveClass();

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
