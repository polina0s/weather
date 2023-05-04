import { modal } from "../modal/modal";
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
  }

  createCityButton({ country, name, latitude, longitude }) {
    this.element = document.createElement("button");
    this.element.classList.add("modal-button");

    this.element.innerHTML = `<div class="modal-button--country">${country}</div>
      <div class="modal-button--city">${name}</div>`;

    this.element.addEventListener("click", () => {
      this.getWeather(latitude, longitude);
      this.modal.removeActiveClass();
    });
  }

  async getWeather(latitude, longitude) {
    const response = await fetch(
      `${this.weatherUrl}forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
    );
    console.log(response);
    // const json = await response.json();
    // console.log(json);
  }
}

export { CityButton };
