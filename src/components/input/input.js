import { modal } from "../modal/modal";
import { api } from "../api/api";
class Input {
  constructor() {
    this.cityInput = document.querySelector(".weather_locationInput-input");
    this.modal = modal;
    this.api = api;
    this.helper = document.querySelector(".modal");

    this.onFocusInput();
    this.onBlurInput();
    this.onChange();
    this.fillHelper("Berlin");
  }

  // createCityButton(country, city) {
  //   this.element = document.createElement("div");
  //   this.element.classList.add("modal-button");

  //   this.element.innerHTML = `<div class="modal-button">
  //     <span class="modal-button--country">${country}</span>
  //     <span class="modal-button--city">${city}</span>
  //     </div>`;
  // }

  async fillHelper(value) {
    let data = await this.api.getCities(value);

    data.forEach((el) => {
      // this.createCityButton(el.country, el.city);
    });
  }

  showHelper(value) {
    if (value.length > 2) {
      this.modal.addActiveClass.bind(this.modal);
    } else {
      this.modal.removeActiveClass.bind(this.modal);
    }
  }

  onChange() {
    this.cityInput.addEventListener("input", (e) => {
      this.showHelper(e.target.value);
    });
  }

  onFocusInput() {
    this.cityInput.addEventListener("focus", (e) => {
      this.showHelper(e.target.value);
    });
  }

  onBlurInput() {
    this.cityInput.addEventListener("blur", () => {
      this.modal.removeActiveClass.bind(this.modal);
    });
  }

  clearInput() {
    this.cityInput.value = "";
  }
}

export { Input };
