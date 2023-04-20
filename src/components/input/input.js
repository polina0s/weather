import { modal } from "../modal/modal";
import { api } from "../api/api";
class Input {
  constructor() {
    this.cityInput = document.querySelector(".weather_locationInput-input");
    this.modal = modal;
    this.api = api;

    // let b = this.api.getCities("Berlin");
    // console.log(b.then((v) => console.log(v)));

    this.onFocusInput();
    this.onBlurInput();
    this.onChange();
  }

  fillHelper() {
    
  }

  showHelper(value) {
    if (value.length > 2) {
      this.modal.addActiveClass().bind(this.modal);
    } else {
      this.modal.removeActiveClass().bind(this.modal);
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
      this.modal.removeActiveClass().bind(this.modal);
    });
  }

  clearInput() {
    this.cityInput.value = "";
  }
}

export { Input };
