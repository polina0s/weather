import { modal } from "../modal/modal";
import { api } from "../api/api";
// import { CityButton } from "../cityButton/cityButton";
class Input {
  constructor() {
    this.cityInput = document.querySelector(".weather_locationInput-input");
    this.modal = modal;
    this.api = api;
    this.helper = document.querySelector(".modal");

    this.onFocusInput();
    this.onBlurInput();
    this.onChange();
  }

  async fillHelper(value) {
    let data = await this.api.getCities(value);
    console.log(data);
    if (data !== undefined) {
      this.modal.showModal(data);
    } else {
      this.modal.removeActiveClass();
    }
  }

  showHelper(value) {
    if (value.length > 1) {
      this.fillHelper(value);
    } else {
      this.modal.removeActiveClass();
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
      this.modal.removeActiveClass();
    });
  }

  clearInput() {
    this.cityInput.value = "";
  }
}

export { Input };
