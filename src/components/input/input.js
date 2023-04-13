import { modal } from "../modal/modal";
class Input {
  constructor() {
    this.cityInput = document.querySelector(".weather_locationInput-input");
    this.modal = modal;

    this.onFocusInput();
    this.onBlurInput();
  }

  onFocusInput() {
    this.cityInput.addEventListener("focus", () => {
      this.modal.addActiveClass().bind(modal);
    });
  }

  onBlurInput() {
    this.cityInput.addEventListener("blur", () => {
      this.modal.removeActiveClass().bind(modal);
    });
  }

  clearInput() {
    this.cityInput.value = "";
  }
}

export { Input };
