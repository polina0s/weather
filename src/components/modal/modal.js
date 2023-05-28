import { CityButton } from "../cityButton/cityButton";
import { WeatherCont } from "../weatherCont/weatherCont";
import { CurrentWeather } from "../weatherForecast/currentWeather";
import { weather, weatherImages } from "../weatherForecast/weathercodes";

class Modal {
  constructor() {
    this.modalWind = document.querySelector(".modal");

    this.weatherCont = new WeatherCont();
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
    this.weatherCont.clearWeatherCont();
    this.removeActiveClass();
    this.weatherCont.fillWeatherElement({
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
