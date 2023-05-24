import { CityButton } from "../cityButton/cityButton";
import { WeatherForecastCont } from "../weatherForecastCont/weatherForecastCont";
import { WeatherForecast } from "../weatherForecast/weatherForecast";
import { weather, weatherImages } from "../weatherForecast/weathercodes";

class Modal {
  constructor() {
    this.modalWind = document.querySelector(".modal");

    this.weatherForecastCont = new WeatherForecastCont();
  }

  addActiveClass() {
    this.modalWind.classList.add("modal--active");
  }

  removeActiveClass() {
    this.modalWind.classList.remove("modal--active");
  }

  clearModal() {
    this.modalWind.innerHTML = "";
  }

  appendCityButton(element) {
    this.modalWind.append(element);
  }

  handleCityClick(data) {
    this.weatherForecastCont.clearWeatherForecastCont();
    this.removeActiveClass();
    this.weatherForecastCont.fillWeatherForecastElement({
      latitude: data.latitude,
      longitude: data.longitude,
      name: data.name,
    });
  }

  showModal(data) {
    this.clearModal();
    if (data) {
      data?.forEach((el) => {
        const element = new CityButton({
          ...el,
          onClick: () =>
            this.handleCityClick({
              latitude: el.latitude,
              longitude: el.longitude,
              name: el.name,
            }),
        });

        this.appendCityButton(element.element);
      });
      this.addActiveClass();
    }
  }
}

const modal = new Modal();

export { modal };
