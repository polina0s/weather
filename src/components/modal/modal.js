import { CityButton } from "../cityButton/cityButton";
import { weather } from "../weatherForecast/weathercodes";

class Modal {
  constructor() {
    this.modalWind = document.querySelector(".modal");

    this.weatherForecast = new WeatherForecast()
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

  handleCityClick() {
    this.weatherForecast.clear()
    this.modal.removeActiveClass()
    this.weatherForecast.append()
  }

  showModal(data) {
    this.clearModal();
    if (data) {
      data?.forEach((data) => {
        const element = new CityButton({...data, onClick: this.handleCityClick})
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
